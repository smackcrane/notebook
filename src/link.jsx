import React from "react"

export {Link}

function Link({href, slug, children}) {
    if (slug) {
        return <a href={`/pages/${slug}`}>{children}</a>
    } else {
        return <a href={href}>{children}</a>
    }
}