const router = require("express").Router();
const Workouts = require("../models/workout.js");

// getting info from api
router.get("/api/workouts", (req, res) => {
    Workouts.find({})
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => {res.json(err);});
});

// posting workout to the api
router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// put request for id
router.put("/api/Workouts/:id", (req, res) => {
    console.log(req.body)
    Workouts.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body }},
      { new: true })
      .then(dbWorkout => { res.json(dbWorkout); })
      .catch(err => { res.json(err); });
  });

// get workouts within range
router.get("/api/Workouts/range", (req, res) => {
    Workouts.find({})
      .then(dbWorkout => { res.json(dbWorkout); })
      .catch(err => { res.json(err); });
  });



// router.post("/api/workout/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
