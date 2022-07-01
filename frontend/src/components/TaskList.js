import * as React from 'react';
import List from '@mui/material/List';
import TaskListItem from './TaskListItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const tasks = [
  {
    id: 1,
    title: "Buy ugly vegetables from the Farmer's Market this weekend",
    description: "People get so judgmental about how food looks. I mean, ugly, soft, discolored food is food, too. I need to save them.\n (Wow, I'm such a hero)",
    due_date: "July 2, 2022",
    priority: "High",
    label: "To Buy"
  },
  {
    id: 2,
    title: "Rewatch Hawk and Chick with Louise",
    due_date: "July 2, 2022",
    priority: "High",
    label: "To Watch"
  },
  {
    id: 3,
    title: "test",
    due_date: "July 2, 2022",
    priority: "High",
    label: "To Buy"
  }
];

const createTaskElements = (tasks, props) => {
  return tasks.map(task => (
    <TaskListItem
      key={task.id}
      title={task.title}
      due_date={task.due_date}
      priority={task.priority}
      label={task.label}
      toggle={props.toggle}
    />
  ))
}

export default function TaskList(props) {
  const taskElements = createTaskElements(tasks, props)

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
