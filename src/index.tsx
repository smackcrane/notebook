import ReactDOM from "react-dom/client"

function renderWebsite(website: React.ReactNode) {
    ReactDOM.createRoot(document.getElementById("root")!).render(website)
}

function App() {
    return (
        <>
            <h1>Hello, world!</h1>
            {
                "A website written in Typescript and React, and bundled with Vite."
            }
        </>
    )
}

renderWebsite(<App />)
