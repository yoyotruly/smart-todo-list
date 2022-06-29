const express = require("express");
const router  = express.Router();

const priorityModel = require("../models/model.priority");

router
  .route("/")
  .get((req, res) => {
    priorityModel.getAllPriorities()
      .then(priorities => res.json({ priorities }))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })

router
  .route("/:priorityId")
  .get((req, res) => {
    const { priorityId } = req.params;
    priorityModel.getPriorityById(priorityId)
      .then(priority => res.json({ priority }))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })

module.exports = router;
