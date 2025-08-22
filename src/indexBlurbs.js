export { indexBlurbs }

/** String template for page link/title/blurb in index */
function pageBlurb(page) {
    return `
<div class="tag-${page.tag}">
    <b>
        <a href="pages/${page.slug}.html">${page.title}</a>
    </b>
    <div style="width: 90%; margin: auto">${page.blurb}</div>
</div>
`
}

/** String template for series title/pages in index */
function seriesBlurb(series) {
    return (
        `
<b>${series.title}</b>
<div class="series">
` +
        series.pages.map((page) => pageBlurb(page)).join('') +
        `
</div>
`
    )
}

/** Component for full index */
function indexBlurbs(index) {
    return index
        .map((entry) => (entry.series ? seriesBlurb(entry) : pageBlurb(entry)))
        .join('')
}
