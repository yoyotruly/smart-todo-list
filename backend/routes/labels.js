const express = require("express");
const router  = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get all labels");
  })

router
  .route("/:labelId")
  .get((req, res) => {
    const { labelId } = req.params;
    res.send(`Get label by ${labelId}`);
  })

module.exports = router;
