import * as React from 'react';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TaskList(props) {
  const taskElements = [];
  for (const [key, value] of Object.entries(props.tasksData)) {
    const taskElement = (
      <TaskListItem
        key={key}
        task_id={value.task_id}
        title={value.title}
        dueDate={value.due_date}
        priority={value.priority}
        label={value.label}
        isComplete={value.is_complete}
        toggle={() => props.toggle(key)}
        setTasksData={props.setTasksData}
      />)
    taskElements.push(taskElement)
  }

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
