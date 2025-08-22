import React from 'react'

export { SeriesNavigation }

function SeriesNavigation({ prev, next }) {
    return (
        <>
            {prev && (
                <span className="prev">
                    <a href={`${prev.slug}.html`}>{prev.title}</a>
                </span>
            )}
            {next && (
                <span className="next">
                    <a href={`${next.slug}.html`}>{next.title}</a>
                </span>
            )}
            <div style={{ clear: 'both' }}></div>
        </>
    )
}
