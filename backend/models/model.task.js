const db = require("../db/index");

const getAllTasks = () => {
  const query = "SELECT * FROM tasks";

  return db
    .query(query)
    .then(res => {
      const tasks = res.rows;
      if (!tasks) return null;
      return tasks;
    })
    .catch(err => console.log(err.stack));
};

const addTask =  (task) => {
  const query = `
    INSERT INTO tasks
      (user_id, priority_id, label_id, title, description, due_date)
    VALUES
      ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const params = [
    user.name,
    user.email,
    user.password
  ];

  return db
    .query(query, params)
    .then(res => {
      const task = res.rows[0];
      if (!task) return null;
      return task;
    })
    .catch(err => console.log(err.stack));
};

const getTaskById = (id) => {
  const query = `
    SELECT *
      FROM tasks
     WHERE id = $1
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const task = res.rows[0];
      if (!task) return null;
      return task;
    })
    .catch(err => console.log(err.stack));
};

const updateTaskById = (id, taskData) => {
  let query = `
    UPDATE tasks
    SET `;
  const param = [];
  if(taskData.priority_id) {
    param.push(taskData.priority_id)
    query += `priority_id = $${param.length}`
  }
  if(taskData.label_id) {
    param.push(taskData.label_id)
    param.length < 1 ?
    query += `label_id = $${param.length}` :
    query += `, label_id = $${param.length}`
  }
  if(taskData.title) {
    param.push(taskData.title)
    param.length < 1 ?
    query += `title = $${param.length}` :
    query += `, title = $${param.length}`
  }
  if(taskData.description) {
    param.push(taskData.description)
    param.length < 1 ?
    query += `description = $${param.length}` :
    query += `, description = $${param.length}`
  }
  if(taskData.due_date) {
    param.push(taskData.due_date)
    param.length < 1 ?
    query += `due_date = $${param.length}` :
    query += `, due_date = $${param.length}`
  }
  if(taskData.is_complete) {
    param.push(taskData.is_complete)
    param.length < 1 ?
    query += `is_complete = $${param.length}` :
    query += `, is_complete = $${param.length}`
  }
  if(taskData.is_active) {
    param.push(taskData.is_active)
    param.length < 1 ?
    query += `is_active = $${param.length}` :
    query += `, is_active = $${param.length}`
  }
  param.push(id);
  query += ` WHERE id = $${param.length}
    RETURNING *;`;
  console.log(query);

  return db
    .query(query, param)
    .then(res => {
      const task = res.rows[0];
      if (!task) return null;
      return task;
    })
    .catch(err => console.log(err.stack));
};

const deleteTaskById = (id) => {
  const query = `
    UPDATE tasks
    SET is_active = FALSE
    WHERE id = $1
    RETURNING *;
  `;
  const param = [id];

  return db
    .query(query, param)
    .then(res => {
      const task = task.rows[0];
      if (!task) return null;
      return task;
    })
    .catch(err => console.log(err.stack));
};

module.exports = {
  getAllTasks,
  addTask,
  getTaskById,
  updateTaskById,
  deleteTaskById
}
