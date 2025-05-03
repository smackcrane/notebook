import { createContext } from "react"

export { NavigationContext as default }

type NavigationProps = {
    slug: string
    setSlug: (slug: string) => void
}

const NavigationContext = createContext<NavigationProps>({
    slug: "This is a dummy instance---NavigationContext should be used inside a NavigationContext.Provider",
    setSlug: () => {},
})
