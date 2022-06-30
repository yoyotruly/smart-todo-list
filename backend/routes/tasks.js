const express = require('express');
const router  = express.Router();

const taskModel = require("../models/model.task");

router
  .route("/")
  .get((req, res) => {
    // const priority = req.query.priority;
    taskModel.getAllTasks()
      .then(tasks => res.json({ tasks }))
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  })
  .post((req, res) => {
    res.send("Create new task");
  })

router
  .put("/delete/:id", async(req, res) => {
    try {
      await taskModel.deleteTaskById(req.params.id);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
    }
  })

router
  .put("/:id", async(req, res) => {
    try {
      const result = await taskModel.updateTaskById(req.params.id, {...req.body});
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  })

// router
//   .route("/:taskId")
//   .get((req, res) => {
//     const { taskId } = req.params;

//     taskModel.getTaskById(taskId)
//       .then(task => res.json({ task }))
//       .catch(err => {
//         console.error(err);
//         res.send(err)
//       });
//   })
//   .put((req, res) => {
//     const { taskId } = req.params;
//     res.send(`Update task by id ${taskId}`);
//   })
//   .delete((req, res) => {
//     const { taskId } = req.params;
//     res.send(`Delete task by id ${taskId}`);
//   })

module.exports = router;
