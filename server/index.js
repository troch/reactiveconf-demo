const express = require("express")
const cors = require("cors")
const cities = require("./cities.json")

const app = express()
    .use(cors())
    .get("/cities/:search", (req, res) => {
        const { search } = req.params
        const matchedCities = cities
            .filter(({ displayName }) =>
                displayName
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
            .map(city => city.displayName)

        res.json(matchedCities)
    })

app.listen(3001, () => {
    console.log("listening on port 3001")
    console.log(
        "Try http://localhost:3001/cities/uni"
    )
})
