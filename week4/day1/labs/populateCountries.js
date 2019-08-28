const knex = require("./client");
const countries = require("./countriesRaw");

// Sample country
// {
//     countryName: "Zimbabwe",
//     countryCode: "ZWE",
//     year: "1971",
//     value: "5351195"
// }

function scrub(countryArray) {
    let foundKeys = [];
    return countryArray.reduce((acc, country) => {
        if (!foundKeys.includes(country.countryCode)) {
            foundKeys.push(country.countryCode);
            acc.push({
                name: country.countryName,
                code: country.countryCode
            });
        }
        return acc;
    }, []);
}

knex.insert(scrub(countries), ["id", "name", "code"])
    .into("countries")
    .then(returning => {
        console.log(`Populated table with ${returning.length} items`);
        knex.destroy();
    })
    .catch(err => {
        console.log(err);
        knex.destroy();
    });
