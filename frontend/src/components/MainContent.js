import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

const leftSidebarWidth = 240;
const rightSidebarWidth = 600;

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
  }),
);

const taskListStyles = {
  maxWidth: `calc(100% - ${leftSidebarWidth}px)`,
  ml: `calc(0.5% + ${leftSidebarWidth}px)`,
}

export default function RightSidebar() {
  const [isOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen(prevIsOpen => !prevIsOpen);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Main open={isOpen}>
        <Toolbar />
        <TaskList
          style={taskListStyles}
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
        <TaskDetail />
        <Button variant="text" onClick={handleClose}>
          Close
        </Button>

      </Drawer>
    </Box>
  );
}
