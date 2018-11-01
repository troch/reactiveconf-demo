import "./index.css"

import React from "react"
import ReactDOM from "react-dom"
import ConnectedSearchBox from "./ConnectedSearchBox"

function App() {
    return <ConnectedSearchBox />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
