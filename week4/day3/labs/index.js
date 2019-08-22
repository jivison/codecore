const express = require("express");
const morgan = require("morgan");

// Helper function for /car_status
const processYear = require("./helpers/getCarLabels");

// Helper function for /random_person
const randomPerson = require("./helpers/randomPerson");

// Helper function for /fizz_buzz
const fizzbuzz = require("./helpers/fizzbuzz");

// Helper function for /directory_lister
const directoryLister = require("./helpers/directoryLister");

const app = express();

function verifyParam(req) {
    return req ? req : "";
}

app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get("/car_status", (req, res) => {
    let year = verifyParam(req.query.year);
    let condition = processYear(year).split("|");

    res.render("carStatus", { condition: condition[0], color: condition[1] });
});

app.get("/random_person", (req, res) => {
    let csvPeople = verifyParam(req.query.csvPeople);

    res.render("randomPerson", {
        winner: randomPerson(csvPeople)
    });
});

app.get("/fizz_buzz", (req, res) => {
    let num1 = verifyParam(req.query.num1);
    let num2 = verifyParam(req.query.num2);

    res.render("fizzBuzz", {
        fizzbuzzArray: fizzbuzz(num1, num2)
    });
});

app.get("/fizz_buzz", (req, res) => {
    res.render("directoryLister", {
        directoryArray: directoryLister()
    });
});

app.get("/directory_lister", (req, res) => {
    res.render("directoryLister", {
        directoryArray: directoryLister()
    });
});

app.use((req, res, next) => {
    res.status(404);
    res.render("errors/404");
});

const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Server started at port ${PORT} and address ${ADDRESS}`);
});
