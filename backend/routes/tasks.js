const express = require('express');
const router  = express.Router();

const taskModel = require("../models/model.task");

router
  .route("/")
  .get((req, res) => {
    // const priority = req.query.priority;
    taskModel.getAllTasks()
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })
  .post((req, res) => {
    const task = req.body;

    taskModel.addTask(task)
      .then(data => {
        if (!data) {
          return res.send({error: "error"});
        }
        res.json(data)
      }).catch(err => {
        console.error(err);
        res.send(err)
      });
  })

router
  .route("/:taskId")
  .get((req, res) => {
    const { taskId } = req.params;

    taskModel.getTaskById(taskId)
      .then(data => res.json(data))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })
  .put(async (req, res) => {
    try {
      const result = await taskModel.updateTaskById(req.params.id, {...req.body});
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await taskModel.deleteTaskById(req.params.id);
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;
