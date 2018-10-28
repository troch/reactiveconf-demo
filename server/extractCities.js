const fs = require("fs")

const rawCities = fs.readFileSync("./src/cities.txt").toString()

const cities = rawCities.split("\n").map(val => {
    let [name, country] = val.split("\t")

    name = name.trim()
    country = country.trim()

    return { name, country, displayName: `${name} (${country})` }
})

fs.writeFileSync("./server/cities.json", JSON.stringify(cities, null, 2))
