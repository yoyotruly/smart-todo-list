import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Typography from '@mui/material/Typography';

export default function TaskList() {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: "background.paper"
      }}
    >

      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <RadioButtonUncheckedIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText
          primary="Buy ugly vegetables from the Farmer's Market this weekend"
          secondary={
            <>
              Jan 7, 2022
              High Priority
              To Buy
            </>
          }
        />
      </ListItem>

      <Divider component="li" />

      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <RadioButtonUncheckedIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText
          primary="Rewatch Hawk and Chick with the kids"
          secondary={
            <>
              Jan 10, 2022
              High Priority
              To Watch
            </>
          }
        />
      </ListItem>

      <Divider component="li" />

    </List>
  );
}
