const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("homepage");
});

router.get("/sign_in", (req, res) => {
    res.render("signIn");
});

router.post("/sign_in", (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/");
});

router.post("/sign_out", (req, res) => {
    res.clearCookie("username");
    res.redirect("/");
});

module.exports = router;
