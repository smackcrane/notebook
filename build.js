import esbuild from 'esbuild'
import mdx from '@mdx-js/esbuild'
import fs from 'fs'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { pageLayout, indexLayout } from './src/layout.js'

// prior to build, reset dist and out
fs.rmSync('out', { recursive: true, force: true })
fs.mkdirSync('out')
fs.rmSync('dist', { recursive: true, force: true })
fs.mkdirSync('dist/pages', { recursive: true })

// bundle mdx files (and their jsx imports)
await esbuild.build({
    entryPoints: ['index.mdx', 'pages/*.mdx'],
    outdir: 'out',
    bundle: true,
    format: 'esm',
    platform: 'node',
    plugins: [mdx()],
})

// we want to produce a page for each file in pages/ dir
const pages = fs.readdirSync('pages')
for (const page of pages) {
    const extension = path.extname(page)
    const slug = path.basename(page, extension)

    let html = ''
    switch (extension) {
        case '.html':
            // in case of .html, just copy it
            html = fs.readFileSync('pages/' + page)
            break
        case '.mdx':
            // in case of .mdx, import the bundled version from out/, convert to html, and wrap in layout
            const { default: Content } = await import(`./out/pages/${slug}.js`)
            html = pageLayout(renderToString(Content()))
            // break <p> to fix footnotes
            html = html.replaceAll('<p>', '')
            html = html.replaceAll('</p>', '')
            break
        default:
            continue // ignore files that aren't .html or .mdx
    }
    // write to dist
    fs.writeFileSync(`dist/pages/${slug}.html`, html)
}

// copy static/
fs.cpSync('static', 'dist/static', { recursive: true })

// special treatment for index.html
const { default: Content } = await import(`./out/index.js`)
const html = indexLayout(renderToString(Content()))
fs.writeFileSync('dist/index.html', html)

// redirect old URLs
for (let slug of [
    'micropolis-i',
    'micropolis-ii',
    'this-website-i',
    'gumby-road-trip',
]) {
    fs.writeFileSync(
        `dist/${slug}.html`,
        ` <!DOCTYPE html> <html> <head> <meta http-equiv="refresh" content="0; url=pages/${slug}.html" /> </head> <body> <p><a href="pages/${slug}.html">Redirect</a></p> </body> </html> `
    )
}
