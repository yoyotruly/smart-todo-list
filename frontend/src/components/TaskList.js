import * as React from 'react';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TaskList(props) {

  const taskElements = props.tasksData.map(task => (
    <TaskListItem
      key={task.id}
      title={task.title}
      due_date={task.due_date}
      priority={task.priority}
      label={task.label}
      toggle={() => props.toggle(task.id)}
    />
  ))

  return (
    <>
      <AppBar
        elevation={0}
        sx={props.appbarStyle}
      >
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Overview
          </Typography>
        </Toolbar>
      </AppBar>

      <List sx={props.listStyle}>
        {taskElements}
      </List>
    </>
  );
}
