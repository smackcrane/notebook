export { indexBlurbs }

/** String template for page link/title/blurb in index */
function pageBlurb(page, level, seriesTitle) {
    // mark level in index
    const className = `page indexLevel-${level}`
    // if it's in a series, and starts with the series title, remove that
    let title = page.title
    if (title.startsWith(seriesTitle + ' ')) {
        title = title.slice(seriesTitle.length + 1)
    }
    // if it's top level, make the title h3, otherwise b
    const titleElement = level === 1 ? 'h3' : 'b'

    return `
<div class="${className}" tag="${page.tag}">
    <${titleElement}>
        <a href="pages/${page.slug}.html">${title}</a>
    </${titleElement}>
    <div class="blurb">${page.blurb}</div>
</div>
`
}

/** String template for series title/pages in index */
function seriesBlurb(series, level) {
    const className = `series indexLevel-${level}`

    return (
        `
<div class="${className}" tag="${series.tag}">
<h3>${series.title}</h3>
<div class="pageList">
` +
        series.pages
            .map((page) => pageBlurb(page, level + 1, series.title))
            .join('') +
        `
</div>
</div>
`
    )
}

/** Component for full index */
function indexBlurbs(index) {
    return index
        .map((entry) =>
            entry.series ? seriesBlurb(entry, 1) : pageBlurb(entry, 1)
        )
        .join('')
}
