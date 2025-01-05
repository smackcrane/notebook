import { useContext } from "react"
import { NavigationContext } from "./navigationContext"

export { Page }

function Page() {
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
