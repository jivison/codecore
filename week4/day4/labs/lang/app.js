const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const decideGreeting = require("./helpers/decideGreeting");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.locals.lang = req.cookies.lang;
    res.locals.name = req.cookies.name;
    next();
});
app.use(morgan("dev"));

app.set("view engine", "ejs");

// HTTP verbs
// GET - requesting a resource, should only respond with data
// POST - used to create a resource
// PATCH - used to update an existing resource
// PUT - used to completely replace an existing resource
// DELETE - used to remove a resource

app.get("/", (req, res) => {
    res.render("homepage", { greeting: decideGreeting(res.locals.lang) });
});

app.get("/select_language", (req, res) => {
    res.render("languageSelect");
});

const cookieMaxAge = 1000 * 60 * 60 * 24 * 7;

app.post("/language_selected", (req, res) => {
    res.cookie("lang", req.body.lang, { maxAge: new Date() });
    res.cookie("name", req.body.name, { maxAge: new Date() });
    res.redirect("/");
});

const PORT = 4545;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Express server started on ${ADDRESS} and ${PORT}`);
});
