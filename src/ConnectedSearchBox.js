import { withEffects, toProps } from "refract-rxjs"
import { combineLatest, merge } from "rxjs"
import {
    map,
    startWith,
    switchMap,
    filter,
    catchError,
    debounceTime
} from "rxjs/operators"

import SearchBox from "./SearchBox"
import DependencyContext from "./context"

const aperture = (
    initialProps,
    { api, storage }
) => component => {
    const [
        searchValue$,
        setSearchValue
    ] = component.useEvent("search", storage.get("search"))

    const suggestions$ = searchValue$.pipe(
        filter(value => value && value.length >= 2),
        debounceTime(300),
        switchMap(searchValue =>
            api.searchCities(searchValue)
        ),
        startWith([])
    )

    return merge(
        combineLatest(searchValue$, suggestions$).pipe(
            map(([searchValue, suggestions]) =>
                toProps({
                    searchValue,
                    suggestions,
                    setSearchValue
                })
            )
        ),
        searchValue$.pipe(
            map(searchValue => ({
                type: "STORAGE",
                name: "search",
                value: searchValue
            }))
        )
    )
}

const handler = (initialProps, { storage }) => effect => {
    if (effect.type === "STORAGE") {
        storage.set(effect.name, effect.value)
    }
}
const errorHandler = initialProps => error => {}

export default withEffects(
    handler,
    errorHandler,
    DependencyContext
)(aperture)(SearchBox)
