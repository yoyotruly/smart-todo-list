import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import { tasks } from "../data/tasks";
import { useTheme } from '@mui/material/styles';

const leftSidebarWidth = 240;
const rightSidebarWidth = 700;
const topBarHeight = 64;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -rightSidebarWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    backgroundColor: alpha(theme.palette.grey[700], 0.02),
    height: "100vh"
  }),
);

const taskListStyles = {
  maxWidth: `calc(100% - ${leftSidebarWidth}px)`,
  ml: `${leftSidebarWidth}px`,
  mt: `${topBarHeight + 40}px`
}

export default function RightSidebar(props) {

  const theme = useTheme();

  const appbarStyles = {
    maxWidth: `calc(100% - ${leftSidebarWidth}px)`,
    ml: `${leftSidebarWidth}px`,
    mt: `${topBarHeight}px`,
    backgroundColor: theme.palette.mode === 'dark' ? "inherit" : "common.white",
    color: "inherit",
    borderBottomWidth: "5px",
    borderBottomStyle: "solid",
    borderColor: "primary.main",
  }

  const [isOpen, setOpen] = React.useState(false);
  const toggle = (id) => {
    console.log(id);
    return setOpen(prevIsOpen => !prevIsOpen)
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Main open={isOpen}>
        <TaskList
          tasksData={props.tasksData}
          handleDelete={props.handleDelete}
          listStyle={taskListStyles}
          appbarStyle={appbarStyles}
          toggle={toggle}
        />
      </Main>

      <Drawer
        sx={{
          width: rightSidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: rightSidebarWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      >

        <Toolbar />
        <TaskDetail task={tasks[0]}/>

      </Drawer>
    </Box>
  );
}
