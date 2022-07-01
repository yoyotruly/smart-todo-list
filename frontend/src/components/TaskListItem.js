import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CircleCheckbox from './CircleCheckbox';

export default function TaskListItem(props) {
  return (
    <div>
      <ListItem
        alignItems="flex-start"
        onClick={props.toggle}
      >
        <CircleCheckbox />
        <ListItemText
          primary={props.title}
          secondary={
            <>
              <span>{props.due_date}</span>
              <span> | Priority {props.priority}</span>
              <span> | Label {props.label}</span>
            </>
          }
        />
      </ListItem>
      <Divider component="li" />
    </div>
  )
}

