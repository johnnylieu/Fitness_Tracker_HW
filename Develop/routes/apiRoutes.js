const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/.workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log("apiRoutes, router.post error", err);
        res.json(err);
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log("apiRoutes, router.put error", err);
        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
    })
    .catch(err => {
        console.log("apiRoutes router.get error", err);
        res.json(err);
    });
});

router.delete("/api/workouts", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        console.log("apiRoutes, router.delete error", err);
        res.json(err);
    });
});

module.exports = router;