const express = require("express");
const router  = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get all priorities");
  })

router
  .route("/:priorityId")
  .get((req, res) => {
    const { priorityId } = req.params;
    res.send(`Get priority by ${priorityId}`);
  })

module.exports = router;
