import React from "react"
import SearchBox from "./SearchBox"

export default function SearchBoxStatic() {
    return (
        <SearchBox
            searchValue="Prague"
            suggestions={["Prague (Czech Republic)"]}
        />
    )
}
