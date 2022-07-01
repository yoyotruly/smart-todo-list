import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

const leftSidebarWidth = 240;
const rightSidebarWidth = 700;

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
  ml: `${leftSidebarWidth}px`
}

const task = {
  id: 1,
  title: "Buy ugly vegetables from the Farmer's Market this weekend",
  description: `People get so judgmental about how food looks. I mean, ugly, soft, discolored food is food, too. I need to save them. (Wow, I'm such a hero)`,
  due_date: "July 2, 2022",
  priority: "High",
  label: "To Buy"
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
        <TaskDetail task={task}/>
        <Button variant="text" onClick={handleClose}>
          Close
        </Button>

      </Drawer>
    </Box>
  );
}
