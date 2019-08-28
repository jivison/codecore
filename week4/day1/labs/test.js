const client = require("./client");

async function getCountries() {
    return client("countries")
        .select("*")
        .then(data => {
            return data;
        });
}

getCountries().then((data) => {
    console.log(data);
});