import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function MenuListItem(props) {
  return (
    <ListItem
      component="a"
      href={props.href}
      sx={{color: "text.primary"}}
      >
      <ListItemButton>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
      </ListItem>
  )
}



