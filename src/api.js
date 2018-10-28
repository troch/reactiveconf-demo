import { of } from "rxjs"
import { map, catchError } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const BASE_URL = 'http://localhost:3001'

export default {
    searchCities: searchValue =>
        ajax({
            url: `${BASE_URL}/cities/${searchValue}?fields=name`
        }).pipe(
            map(results => results.response),
            catchError(() => of([]))
        )
}
