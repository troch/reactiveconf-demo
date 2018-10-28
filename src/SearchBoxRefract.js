import { withEffects, toProps } from "refract-rxjs"
import { combineLatest } from "rxjs"
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

const aperture = initialProps => component => {}

const handler = initialProps => effect => {}

export default withEffects(handler)(aperture)(SearchBox)
