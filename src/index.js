import "./index.css"

import React from "react"
import ReactDOM from "react-dom"
import SearchBox from "./SearchBox"
import SearchBoxStatic from "./SearchBoxStatic"
import SearchBoxRefract from "./SearchBoxRefract"
import SearchBoxRefractFinal from "./final/SearchBoxRefract"

function App() {
    return <SearchBox />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
