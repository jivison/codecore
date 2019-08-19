const countries = require("../countriesRaw");

// Sample country
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

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("countries")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("countries").insert(scrub(countries));
        });
};
