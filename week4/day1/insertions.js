const knex = require("./db/client");

// knex.into("posts").insert({
//     title: "First post!",
//     content: "Inserting stuff into our posts table with knex.js"
// }).returning("title", "content");

// knex.insert({title: "test", content: "test"})

knex.insert(
    [{ title: "Great Gatsby" }, { title: "Help i dont know any movies" }],
    ["id", "title"]
)
    .into("posts")
    .then(returning => {
        for (const element of returning) {
            console.log(`${element.id} | ${element.title}`);
        }
        knex.destroy();
    })
    .catch(err => {
        console.log("An error occurred");
        knex.destroy();
    });
