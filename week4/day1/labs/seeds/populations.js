const countries = require("../countriesRaw");

// {
//     countryName: "Arab World",
//     countryCode: "ARB",
//     year: "1960",
//     value: "92490932"
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

let cheatsheet = {};

let uniqueCountries = scrub(countries);
for (let i = 0; i < uniqueCountries.length; i++) {
    const country = uniqueCountries[i];
    cheatsheet[country.code] = i + 1;
}

function getCountryIdFromCC(cc, cheatsheet) {
    return cheatsheet[cc];
}

function scrubForPop(countryArray) {
    return countryArray.reduce((acc, val) => {
        acc.push({
            country_id: getCountryIdFromCC(val.countryCode, cheatsheet),
            year: parseInt(val.year),
            quantity: parseInt(val.value)
        });
        return acc;
    }, []);
}

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("populations")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("populations").insert(scrubForPop(countries));
        });
};
