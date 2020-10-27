const Workout = require("workout.js");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log("app.get err", err)
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req,res) {
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log("app.post err", err)
            res.json(err);
        })
    });
}