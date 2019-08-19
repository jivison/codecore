const knex = require("./client");

function findB() {
    knex.select("*")
        .from("countries")
        .whereRaw("name ILIKE 'b%'")
        .then(data => {
            console.log(data);
            knex.destroy();
        })
        .catch(err => {
            console.log("An error occurred...");
            console.log(err);
        });
}

function countCentral() {
    knex("countries")
        .count({ count: "name" })
        .whereRaw("name ILIKE '%central%'")
        .then(data => {
            console.log(data[0]);
            knex.destroy();
        }).catch(err => {
            console.log(err);
            knex.destroy();
        });
}

function countSimilarToCode() {
    knex("countries")
        .count({ count: "name"})
        .whereRaw("LEFT(name, 3) ILIKE code")
        .then(data => {
            console.log(data[0]);
            knex.destroy();
        }).catch(err => {
            console.log(err);
            knex.destroy();
        });
}
