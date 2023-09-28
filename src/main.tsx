import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./home.tsx"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
