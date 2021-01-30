var express = require('express');
var router = express.Router();
const database = require('./database');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/crt", (req, res, next) => {
    if (req.body.username === "test" && req.body.password === "test") {
        res.status(200).send("Test Successful");
        console.log("Test Succesful");
        console.log(database);
        console.log(req.body);
        return;
    }
    for (let user of database) {
        if (user.username === req.body.username) {
            res.status(500).send("Username is already registered")
            return;
        }
    }

    database.push({
        username: req.body.username,
        password: req.body.password,
        phrase: req.body.phrase
    })
    res.status(200).send("success");
    // console.log(databse);
    // console.log("Heyy");
    // console.log(req.query);
    
})

router.get("/fetch/:password/:username", (req, res, next) => {
    let password = req.params.password;
    let username = req.params.username;
    if(username === "test" && password === "test") {
        res.status(200).send("Test Succesful");
        console.log(database);
        return;
    }
    for (let user of database) {
        if (user.password === password && user.username === username) {
            res.status(200).send(user.phrase);
            console.log(req.params, user.phrase);
            return;
        }
    }
    res.status(404).send("Sorry that account does not exist.")
})

module.exports = router;