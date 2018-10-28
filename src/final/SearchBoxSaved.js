import React from "react"
import ReactDOM from "react-dom"
import { withEffects, toProps } from "refract-rxjs"
import { merge } from "rxjs"
import { map, startWith } from "rxjs/operators"

import SearchBox from "../SearchBox"

const toStorage = name => value => ({
    type: "STORAGE",
    payload: {
        name,
        value
    }
})

const handler = ({ storage }) => effect => {
    if (!effect) {
        return
    }

    if (effect.type === "STORAGE") {
        const { name, value } = effect.payload
        storage.set(name, value)
    }
}

const aperture = ({ storage }) => component => {
    const setSearchValue = component.pushEvent("search")
    const search$ = component
        .fromEvent("search")
        .pipe(startWith(storage.get("search")))
    const props$ = search$.pipe(
        map(searchValue => ({
            searchValue,
            setSearchValue
        })),
        map(toProps)
    )
    const persistedSearchValue$ = search$.pipe(map(toStorage("search")))

    return merge(props$, persistedSearchValue$)
}

export default withEffects(handler)(aperture)(SearchBox)
