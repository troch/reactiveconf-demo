import { withEffects, toProps } from "refract-rxjs"
import { combineLatest, empty } from "rxjs"
import {
    map,
    startWith,
    switchMap,
    filter,
    catchError,
    debounceTime
} from "rxjs/operators"

import api from "./api"
import SearchBox from "./SearchBox"

const aperture = (initialProps) => component => {
    return empty()
}

const handler = initialProps => effect => {}
const errorHandler = initialProps => error => {}

export default withEffects(
    handler,
    errorHandler
)(aperture)(SearchBox)
