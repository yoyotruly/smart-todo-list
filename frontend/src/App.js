import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './components/User';
import TaskOverview from "./pages/tasks/Overview";

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
            <Route path=":labelId" element={<TaskOverview />} />
            <Route path="done" element={<TaskOverview />} />
            <Route path="important" element={<TaskOverview />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
