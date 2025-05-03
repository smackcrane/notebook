import { useContext } from "react"
import NavigationContext from "./navigationContext"

export default function Link({
    slug,
    children,
}: {
    slug: string
    children: React.ReactNode
}) {
    const nav = useContext(NavigationContext)
    return <a onClick={() => nav.setSlug(slug)}>{children}</a>
}
