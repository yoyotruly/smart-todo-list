const express = require('express');
const router  = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get all tasks");
  })
  .post((req, res) => {
    res.send("Create new task");
  })

router
  .route("/:taskId")
  .get((req, res) => {
    const { taskId } = req.params;
    res.send(`Get task by id ${taskId}`);
  })
  .put((req, res) => {
    const { taskId } = req.params;
    res.send(`Update task by id ${taskId}`);
  })
  .delete((req, res) => {
    const { taskId } = req.params;
    res.send(`Delete task by id ${taskId}`);
  })

module.exports = router;
