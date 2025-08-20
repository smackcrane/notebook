import React from 'react'

export { Footnote }

let footnoteCounter = 0

function Footnote({ children }) {
    const n = ++footnoteCounter

    return (
        <>
            <label htmlFor={`fn-${n}-toggle`}>
                <sup>{n}</sup>
            </label>
            <input type="checkbox" hidden id={`fn-${n}-toggle`} />
            <div className="fn-content">{children}</div>
        </>
    )
}
