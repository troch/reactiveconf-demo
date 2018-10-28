import React from "react"

import MenuItem from "@material-ui/core/MenuItem"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const noop = () => {}

export default function SearchBox({
    searchValue,
    setSearchValue = noop,
    suggestions = [],
    minLength = 2
}) {
    return (
        <div>
            <TextField
                value={searchValue}
                onChange={evt =>
                    setSearchValue(evt.target.value)
                }
            />
            <Popper
                open={
                    searchValue
                        ? searchValue.length >= minLength
                        : false
                }
            >
                <Paper square>
                    {suggestions.length ? (
                        suggestions.map(suggestion => (
                            <MenuItem>
                                {suggestion}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem>No results</MenuItem>
                    )}
                </Paper>
            </Popper>
        </div>
    )
}
