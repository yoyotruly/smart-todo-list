import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import CircleCheckbox from './CircleCheckbox';

const drawerWidth = 240;

export default function TaskList(props) {
  return (
    <List
    sx={{
      maxWidth: `calc(100% - ${drawerWidth}px)`,
      ml: `calc(0.5% + ${drawerWidth}px)`,
    }}
    >

      <ListItem alignItems="flex-start">
        <CircleCheckbox />
        <ListItemText
          primary="Buy ugly vegetables from the Farmer's Market this weekend"
          secondary={
            <>
              Jan 7, 2022 | High Priority | To Buy
            </>
          }
        />
      </ListItem>

      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <CircleCheckbox />
        <ListItemText
          primary="Rewatch Hawk and Chick with the kids"
          secondary={
            <>
              Jan 10, 2022 | High Priority | To Watch
            </>
          }
        />
      </ListItem>

      <Divider component="li" />

    </List>
  );
}
