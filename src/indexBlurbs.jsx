import React from 'react'

export { IndexBlurbs }

/** Component for page link/title/blurb in index */
function PageBlurb({ page, level, seriesTitle }) {
    // mark level in index
    const className = `page indexLevel-${level}`
    // if it's in a series, and starts with the series title, remove that
    let title = page.title
    if (seriesTitle && title.startsWith(seriesTitle + ' ')) {
        title = title.slice(seriesTitle.length + 1)
    }
    // if it's top level, make the title h3, otherwise b
    const titleElement =
        level === 1 ? (
            <h3>
                <a href={`pages/${page.slug}.html`}>{title}</a>
            </h3>
        ) : (
            <b>
                <a href={`pages/${page.slug}.html`}>{title}</a>
            </b>
        )

    return (
        <div className={className} tag={page.tag}>
            {titleElement}
            <div className="blurb">{page.blurb}</div>
        </div>
    )
}

/** Component for series title/pages in index */
function SeriesBlurb({ series, level }) {
    const className = `series indexLevel-${level}`

    return (
        <>
            <div className={className} tag={series.tag}>
                <h3>{series.title}</h3>
                <div className="pageList">
                    {series.pages.map((page, i) => (
                        <PageBlurb
                            page={page}
                            level={level + 1}
                            seriesTitle={series.title}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

/** Component for full index */
function IndexBlurbs({ index }) {
    return (
        <>
            {index.map((entry, i) =>
                entry.series ? (
                    <SeriesBlurb series={entry} level={1} key={i} />
                ) : (
                    <PageBlurb page={entry} level={1} key={i} />
                )
            )}
            {/* activate tag script, after blurbs have been inserted */}
            <script src="static/tags.js"></script>
        </>
    )
}
