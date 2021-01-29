var express = require('express');
var router = express.Router();
const database = require('./database');

router.get("/crt", (req, res, next) => {
    for (let user of database) {
        if (user.username === req.query.username) {
            res.status(500).send("Username is already registered")
            return;
        }
    }

    database.push({
        username: req.query.username,
        password: req.query.password,
        phrase: req.query.phrase
    })
    res.status(200).send("success");
    // console.log(databse);
    // console.log("Heyy");
    // console.log(req.query);
    
})

router.get("/fetch/:password/:username", (req, res, next) => {
    let password = req.params.password;
    let username = req.params.username
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