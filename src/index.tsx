import { createContext, useContext, useState } from "react"
import ReactDOM from "react-dom/client"

export { NavigationContext as PageContext }

renderWebsite(<Website />)

function renderWebsite(website: React.ReactNode) {
    console.log("Rendering website")
    ReactDOM.createRoot(document.getElementById("root")!).render(website)
}

type NavigationProps = {
    page: string
    setPage: (page: string) => void
}

const NavigationContext = createContext<NavigationProps>({
    page: "foo",
    setPage: () => {},
})

function Website() {
    const [page, setPage] = useState("home")
    return (
        <>
            <NavigationContext.Provider
                value={{
                    page: page,
                    setPage: (page) => {
                        console.log(page)
                        setPage(page)
                    },
                }}
            >
                <DynamicPage />
            </NavigationContext.Provider>
        </>
    )
}

function DynamicPage() {
    const nav = useContext(NavigationContext)
    return (
        <>
            <h1>Hello, {nav.page}!</h1>
            <p>
                A website written in Typescript and React, and bundled with
                Vite.
            </p>
            <button onClick={() => nav.setPage("home")}>Home</button>
            <button onClick={() => nav.setPage("world")}>World</button>
        </>
    )
}
