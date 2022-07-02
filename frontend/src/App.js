import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './components/User';
import TaskOverview from "./pages/tasks/Overview";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const modeToggleStyles = {
  position: "fixed",
  right: 110,
  top: 12,
  zIndex: (theme) => theme.zIndex.drawer + 2
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function AppContent() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <IconButton
        // sx={{ ml: 1 }}
        sx={modeToggleStyles}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
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

export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
