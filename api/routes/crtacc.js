var express = require('express');
var router = express.Router();
var databse = require("./database");

router.get("/", (req, res, next) => {
    console.log(databse);
    console.log("Heyy");
    console.log(req.query);
})

module.exports = router;