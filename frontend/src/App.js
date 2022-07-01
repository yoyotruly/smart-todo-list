import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './components/User';
import Tasks from "./pages/tasks/Tasks";
import TaskDone from "./pages/tasks/TaskDone";
import TaskHighPriority from "./pages/tasks/TaskHighPriority";
import TaskLabel from "./pages/tasks/TaskLabel";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
          <Route path="tasks">
            <Route index />
            <Route path="overview" element={<Tasks />} />
            <Route path=":labelId" element={<TaskLabel />} />
            <Route path="done" element={<TaskDone />} />
            <Route path="important" element={<TaskHighPriority />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
