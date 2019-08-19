const knex = require("./db/client");

knex.select("*")
    .from("posts")
    .whereRaw(`"created_at" > NOW() - INTERVAL '2 days'`)
    .then(data => {
        console.log(data);
        knex.destroy();
    });
