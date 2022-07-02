const express = require("express");
const router  = express.Router();

const labelModel = require("../models/model.label");

router
  .route("/")
  .get((req, res) => {
    labelModel.getAllLabels()
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })

router
  .route("/:labelId")
  .get((req, res) => {
    const { labelId } = req.params;
    labelModel.getLabelById(labelId)
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })

module.exports = router;
