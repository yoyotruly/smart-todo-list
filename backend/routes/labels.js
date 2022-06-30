const express = require("express");
const router  = express.Router();

const labelModel = require("../models/model.label");

router
  .route("/")
  .get((req, res) => {
    labelModel.getAllLabels()
      .then(labels => {
        res.json({ labels })
      })
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
      .then(label => res.json({ label }))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })

module.exports = router;
