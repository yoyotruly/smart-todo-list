const db = require("../db/index");

const getAllTasks = () => {
  const query = `
  SELECT *,
         l.name AS label,
         p.name AS priority
    FROM tasks t
         LEFT JOIN labels l ON l.id = t.label_id
         LEFT JOIN priorities p ON p.id = t.priority_id
   ORDER BY is_complete DESC, created_at
  `;

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
    WITH new_task AS (
      INSERT INTO tasks
        (user_id, priority_id, label_id, title, description, due_date)
      VALUES
        ($1, $2, $3, $4, $5, $6)
      RETURNING *
    )

    SELECT *,
           l.name AS label,
           p.name AS priority
      FROM new_task t
           LEFT JOIN labels l ON l.id = t.label_id
           LEFT JOIN priorities p ON p.id = t.priority_id
     ORDER BY is_complete DESC, created_at
  `;
  const params = [
    task.user_id,
    task.priority_id,
    task.label_id,
    task.title,
    task.description,
    task.due_date
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
    SELECT *,
           l.name AS label,
           p.name AS priority
      FROM tasks t
           LEFT JOIN labels l ON l.id = t.label_id
           LEFT JOIN priorities p ON p.id = t.priority_id
     WHERE t.id = $1
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
  Object.keys(taskData).forEach((key) => {
    if (taskData[key]) {
      param.push(taskData[key]);

      param.length < 2 ?
        query += `${key} = $${param.length}` :
        query += `, ${key} = $${param.length}`
    }
  })

  param.push(id);

  query += ` WHERE id = $${param.length}
    RETURNING *;`;

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
