var express = require('express');
var router = express.Router();
var databse = require("./database");
const database = require('./database');

router.get("/", (req, res, next) => {
    for (let user of database) {
        if (user.username === req.query.username) {
            res.status(400).send("Username is already registered")
        }
    }
    res.status(200).send("success");
    console.log(databse);
    console.log("Heyy");
    console.log(req.query);
    
})

module.exports = router;