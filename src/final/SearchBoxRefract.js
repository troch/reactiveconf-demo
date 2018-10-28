import { withEffects, toProps } from "refract-rxjs"
import { combineLatest } from "rxjs"
import {
    map,
    startWith,
    switchMap,
    filter,
    debounceTime
} from "rxjs/operators"

import SearchBox from "../SearchBox"
import api from "../api"

const aperture = initialProps => component => {
    const [
        searchValue$,
        setSearchValue
    ] = component.useEvent("search", "")

    const suggestions$ = searchValue$.pipe(
        debounceTime(300),
        filter(searchValue => searchValue.length >= 2),
        switchMap(searchValue =>
            api.searchCities(searchValue)
        ),
        startWith([])
    )

    return combineLatest(searchValue$, suggestions$).pipe(
        map(([searchValue, suggestions]) => ({
            searchValue,
            suggestions,
            setSearchValue
        })),
        map(toProps)
    )
}

const handler = initialProps => effect => {}

export default withEffects(handler)(aperture)(SearchBox)
