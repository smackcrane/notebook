import React from "react"
import ReactDOM from "react-dom/client"

export default function renderWebsite(site: React.ReactNode) {
    ReactDOM.createRoot(document.getElementById("root")!).render(site)
}

function Stuff() {
    console.log("Hello from index.ts > Home()")

    return (
        <>
            <h1>Typescrip + React Website</h1>
            {"Foo bar baz"}
        </>
    )
}

renderWebsite(<Stuff />)
