const Burger = require('../models/burger');
var express = require("express");

var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    // return all burgers
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

router.post("/", function (req, res) {
    let e = new Burger();
    e.create(req.eody, (result) => {
        res.status(200).end();
    });
});

router.put("/:id", function (req, res) {
    let e = new Burger();
    e.update(
        {
            id: req.params.id,
            devoured: 1
        },
        (data) => {
            res.status(200).end();
        }
    );
});

router.delete("/:id", function (req, res) {
    let e = new Burger();
    e.delete(
        {
            id: req.params.id,
        },
        (data) => {

            res.status(204).end();
        }
    );
});

module.exports = router;