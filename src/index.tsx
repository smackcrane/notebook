import { useState } from "react"
import ReactDOM from "react-dom/client"
import Page from "./page"
import NavigationContext from "./navigationContext"
import "katex/dist/katex.min.css" // Import KaTeX CSS, necessary for correct rendering
import "../stylesheet.css"

renderWebsite(<Website />)

function renderWebsite(website: React.ReactNode) {
    console.log("Rendering website")
    ReactDOM.createRoot(document.getElementById("root")!).render(website)
}

function Website() {
    const [slug, setSlug] = useState("home")
    return (
        <>
            <NavigationContext.Provider
                value={{
                    slug: slug,
                    setSlug: setSlug,
                }}
            >
                <Page />
            </NavigationContext.Provider>
        </>
    )
}
