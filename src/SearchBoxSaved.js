import { withEffects, toProps } from "refract-rxjs"
import { merge } from "rxjs"
import { map, startWith } from "rxjs/operators"

import SearchBox from "./SearchBox"

const aperture = ({ storage }) => component => {
    const setSearchValue = component.pushEvent("search")
    const search$ = component.fromEvent("search").pipe(startWith(""))

    const props$ = search$.pipe(
        map(searchValue => ({
            searchValue,
            setSearchValue
        })),
        map(toProps)
    )

    return props$
}

const handler = ({ storage }) => effect => {
    if (!effect) {
        return
    }
}

export default withEffects(handler)(aperture)(SearchBox)
