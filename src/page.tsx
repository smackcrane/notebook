import { useContext } from "react"
import { NavigationContext } from "./navigationContext"

const pages = import.meta.glob("./pages/*.mdx", {
    import: "default",
    eager: true,
})

export { Page }

function Page() {
    const nav = useContext(NavigationContext)
    const Page = pages[`./pages/${nav.page}.mdx`] as React.ComponentType
    return <Page />
}
