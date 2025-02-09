import { createContext, useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import Page from "./page"
import NavigationContext from "./navigationContext"

renderWebsite(<Website />)

function renderWebsite(website: React.ReactNode) {
    console.log("Rendering website")
    ReactDOM.createRoot(document.getElementById("root")!).render(website)
}

function Website() {
    const [page, setPage] = useState("home")
    return (
        <>
            <NavigationContext.Provider
                value={{
                    page: page,
                    setPage: setPage,
                }}
            >
                <Page />
            </NavigationContext.Provider>
        </>
    )
}
