const Burger = require('../models/burger');
var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    let e = new Burger();
    e.selectAll((err, data) => {
        showIndex(data, res);
        console.log("choose finished");
    });
});

function showIndex(data, res) {
    let e = new Burger();
    let unEaten = e.getUndevoured(data);
    let eaten = e.getDevoured(data);
    res.render("index", {
        undevoured: unEaten,
        devoured: eaten
    });
}


module.exports = router;
