const router = require("express").Router();
const Workouts = require("models/workout.js");

// getting info from api
router.get("/api/workout", (req, res) => {
    Workouts.find({})
    .then(db => { res.json(db); })
    .catch(err => {res.json(err);});
});

// posting workout to the api
router.post("/api/workout", ({ body }, res) => {
  Workouts.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//

// posting to stats page


// router.post("/api/workout/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
