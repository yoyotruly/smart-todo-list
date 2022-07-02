const PORT = process.env.PORT || 8080;
const express = require("express");

const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json())

const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000"
}))

const usersRoutes = require("./routes/users");
const tasksRoutes = require("./routes/tasks");
const prioritiesRoutes = require("./routes/priorities");
const labelsRoutes = require("./routes/labels");

app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/priorities", prioritiesRoutes);
app.use("/api/labels", labelsRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 😎`);
});
