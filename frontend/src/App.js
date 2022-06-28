import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Tasks from "./pages/tasks/Tasks"
import TaskDone from "./pages/tasks/TaskDone"
import TaskHighPriority from "./pages/tasks/TaskHighPriority"
import TaskLabel from "./pages/tasks/TaskLabel"


function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="tasks">
            <Route index element={<Tasks />} />
            <Route path=":labelId" element={<TaskLabel />} />
            <Route path="done" element={<TaskDone />} />
            <Route path="high" element={<TaskHighPriority />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
