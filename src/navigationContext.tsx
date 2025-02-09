import { createContext } from "react"

export { NavigationContext as default }

type NavigationProps = {
    page: string
    setPage: (page: string) => void
}

const NavigationContext = createContext<NavigationProps>({
    page: "This is a dummy instance---NavigationContext should be used inside a NavigationContext.Provider",
    setPage: () => {},
})
