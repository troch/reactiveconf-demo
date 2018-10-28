import React from "react"
import SearchBox from "./SearchBox"

export default function SearchBoxStatic() {
    return (
        <SearchBox
            searchValue="Bel"
            suggestions={["Belarus", "Belgium", "Belize", "Palau"]}
        />
    )
}
