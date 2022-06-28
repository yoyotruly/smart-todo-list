const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const usersRoutes = require("./routes/users");
const tasksRoutes = require("./routes/tasks");

app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 😎`);
});
