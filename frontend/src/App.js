import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Tasks from "./pages/tasks/Tasks"
import TaskNew from "./pages/tasks/TaskNew"
import TaskDone from "./pages/tasks/TaskDone"
import TaskHighPriority from "./pages/tasks/TaskHighPriority"
import TaskLabel from "./pages/tasks/TaskLabel"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile/:userId" element={<Profile />} />
        <Route path="tasks">
          <Route index element={<Tasks />} />
          <Route path=":labelId" element={<TaskLabel />} />
          <Route path="new" element={<TaskNew />} />
          <Route path="done" element={<TaskDone />} />
          <Route path="high" element={<TaskHighPriority />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;