import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "@/state/api"
import "@/index.css"

// finance app :01:39:50

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getdefault) => getdefault().concat(api.middleware),
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
