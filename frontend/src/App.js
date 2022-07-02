import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './components/User';
import TaskOverview from "./pages/tasks/Overview";
import TaskDone from "./pages/tasks/Done";
import TaskImportant from "./pages/tasks/Important";
import TaskLabel from "./pages/tasks/Label";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
          <Route path="tasks">
            <Route index />
            <Route path="overview" element={<TaskOverview />} />
            <Route path=":labelId" element={<TaskLabel />} />
            <Route path="done" element={<TaskDone />} />
            <Route path="important" element={<TaskImportant />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
