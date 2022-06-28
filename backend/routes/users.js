const express = require('express');
const router  = express.Router();

router
  .route("/:userId")
  .get((req, res) => {
    const { userId } = req.params;
    res.send(`Get user by id: ${userId}`);
  })
  .put((req, res) => {
    const { userId } = req.params;
    res.send(`Update user info by id ${userId}`);
  });

module.exports = router;
