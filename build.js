import esbuild from 'esbuild'
import mdx from '@mdx-js/esbuild'
import fs from 'fs'
import path from 'path'
import { renderToString } from 'react-dom/server'
import Layout from './src/layout.js'

// prior to build, reset dist and out
fs.rmSync('out', { recursive: true, force: true })
fs.mkdirSync('out')
fs.rmSync('dist', { recursive: true, force: true })
fs.mkdirSync('dist')

// bundle mdx files (and their jsx imports)
await esbuild.build({
    entryPoints: ['pages/*.mdx'],
    outdir: 'out',
    bundle: true,
    format: 'esm',
    platform: 'node',
    plugins: [mdx()],
})

// we want to produce a page for each file in pages/ dir
const pages = fs.readdirSync('pages')
fs.mkdirSync('dist/pages')
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
            const { default: Content } = await import(`./out/${slug}.js`)
            html = Layout(renderToString(Content({ components: {} })))
            // break <p> to fix footnotes
            html = html.replaceAll('<p>', '')
            html = html.replaceAll('</p>', '<br><br>')
            break
        default:
            continue // ignore files that aren't .html or .mdx
    }
    // write to dist
    fs.writeFileSync(`dist/pages/${slug}.html`, html)
}

// copy media/ and static/
fs.cpSync('media', 'dist/media', { recursive: true })
fs.cpSync('static', 'dist/static', { recursive: true })

// special treatment for index.html
fs.cpSync('index.html', 'dist/index.html')
