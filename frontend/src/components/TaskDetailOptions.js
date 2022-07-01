import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LoopIcon from '@mui/icons-material/Loop';
import AttachFileIcon from '@mui/icons-material/AttachFile';


export default function TaskDetailOptions() {
  return (
    <List dense>

      <ListItem sx={{marginTop: "25px"}}>
        <ListItemButton>
          <ListItemIcon>
            < AddCircleOutlineIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="body1" style={{ color: "steelblue" }}>Add step</Typography>
            }
          />
        </ListItemButton>
      </ListItem>

      <ListItem sx={{ml: "3px"}}>
        <ListItemButton>
          <ListItemIcon>
            <RadioButtonUncheckedIcon fontSize="small" color="disabled" />
          </ListItemIcon>
          <ListItemText primary="First step"/>
        </ListItemButton>
      </ListItem>

      <ListItem sx={{ml: "3px"}}>
        <ListItemButton>
          <ListItemIcon>
            <RadioButtonUncheckedIcon fontSize="small" color="disabled" />
          </ListItemIcon>
          <ListItemText primary="Second step" />
        </ListItemButton>
      </ListItem>

      <ListItem sx={{marginTop: "25px"}}>
        <ListItemButton>
          <ListItemIcon>
            <LoopIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="body1" style={{ color: "steelblue" }}>Repeat</Typography>
            }
          />
        </ListItemButton>
      </ListItem>

      <ListItem sx={{marginTop: "25px"}}>
        <ListItemButton>
          <ListItemIcon>
            <AttachFileIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="body1" style={{ color: "steelblue" }}>Add file</Typography>
            }
          />
        </ListItemButton>
      </ListItem>

      <ListItem sx={{marginTop: "25px"}}>
        <TextField
          fullWidth
          id="notes"
          label="Notes"
          placeholder="Add notes"
          multiline
          rows={4}
          variant="filled"
        />
      </ListItem>

    </List>
  )
}
