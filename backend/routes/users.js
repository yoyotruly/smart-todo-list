const express = require("express");
const router  = express.Router();

const userModel = require("../models/model.user");

router
  .route("/:userId")
  .get((req, res) => {
    const { userId } = req.params;

    userModel.getUserById(userId)
      .then(user => res.send({ user }))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })
  .put((req, res) => {
    const { userId } = req.params;
    res.send(`Update user info by id ${userId}`);
  });

module.exports = router;
