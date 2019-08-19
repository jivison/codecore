const knex = require("./db/client");

// knex.insert([
//     { title: "cow", content: `▁▄▃▂▗▅▅▄▃▃▅▝▃▁▁▂
//     ▂▁▆▆▅▃▆ ▂ ▃▂▆▗▂▃
//     ▆ ▄  ▁▂▃▃▃▃▃▂▁▇▇
//      ▘▃▗▆ ▆ ▁▂▃▄▄▄▄▃
//     ▃ ▃ ▆▄▂▅▘▆▗▂ ▂ ▅
//     ▆ ┗▃▄▃▅▘▌▌ ▇ ▇▃▗
//     ▘▆▅▃▃▄▅▅▄▅▄▅▅▄▄▅
//     ▅▂▅▎▇▘┏▅▅▄▄▄▄▃▆ ` },
// ])
//     .into("posts")
//     .then(returning => {
//         console.log(returning);
//         knex.destroy();
//     })
//     .catch(err => {
//         console.log("An error occurred");
//         knex.destroy();
//     });

knex.select("*")
    .from("posts")
    .then(data => {
        for (let post of data) {
            console.log(`${post.id} | ${post.title.toUpperCase()}\n${"=".repeat(post.title.length + post.id.length + 3)}\n${post.content}\n\n`);
        }
        knex.destroy();
    });
