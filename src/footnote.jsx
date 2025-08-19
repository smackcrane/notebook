import React, { useState } from 'react'

export { Footnote }

function Footnote({ n, children }) {
    return (
        <>
            <label htmlFor={`fn-${n}-toggle`}>
                <sup style={{ cursor: 'pointer' }}>{n}</sup>
            </label>
            <input type="checkbox" hidden id={`fn-${n}-toggle"/>`} />
            <div className="fn-content">{children}</div>
        </>
    )
}
