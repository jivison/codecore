const express = require("express");
const logger = require("morgan");



const app = express();

app.use(logger("dev"))
app.set("view engine", "ejs")

// HTTP verbs
// GET - requesting a resource, should only respond with data
// POST - used to create a resource
// PATCH - used to update an existing resource
// PUT - used to completely replace an existing resource
// DELETE - used to remove a resource

app.get("/hello_world", (request, response) => {
    response.send("<h1>HELLO, WORLD!</h1>");
})

app.get("/", (request, response) => {
    response.render("welcome")
})

app.get("/contact_us", (request, response) => {
    response.render("contactUs")
})

app.get("/thank_you", (request, response) => {
    response.render("thankYou", request.query)
})

const PORT = 4545;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Express server started on ${ADDRESS} and ${PORT}`);
})