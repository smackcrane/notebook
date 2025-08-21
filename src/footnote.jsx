import React from 'react'

export { Footnote }

let footnoteCounter = 0

function Footnote({ comma, children }) {
    const n = ++footnoteCounter

    return (
        <>
            <label htmlFor={`fn-${n}-toggle`}>
                <sup>{comma ? `${n},` : `${n}`}</sup>
            </label>
            <input type="checkbox" hidden id={`fn-${n}-toggle`} />
            <div className="fn-content">{children}</div>
        </>
    )
}
