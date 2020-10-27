const router = require("express").Router();
var path = require("path");

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "exercise.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "stats.html"))
});

module.exports = router;