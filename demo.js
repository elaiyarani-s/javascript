var country1 = "Sweden"
var country2 = "Finland"
var country3 = "Germany"

var countries = [
    "Sweden",
    "Finland",
    "Germany",
    "India",
    "Pakistan"
]

console.log(countries[1])
console.log(countries.length)
console.log(countries.pop())
console.log(countries.splice(3,1))
console.log(countries.push("Denmark"))
// console.log(countries.splice(3,1,"Denmark")) // replaces
// console.log(countries.splice(3,0,"Denmark")) // inserts
console.log(countries)

var country

for (country in countries) {
    console.log(country)
}

// for (country of countries) {
//     console.log(country)
// }

function addCountry(countryname){
    console.log(countryname)
}

countries.forEach(addCountry)