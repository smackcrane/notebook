import React from 'react'

export { TagButtons }

/** Component for tag radio buttons in index */
function TagButtons() {
    return (
        <>
            <input
                type="radio"
                id="deselect"
                name="tags"
                style={{ display: 'none' }}
            />
            <label htmlFor="deselect">&#x2715;</label>
            <div id="radio-button-anchor"></div>
        </>
    )
}
