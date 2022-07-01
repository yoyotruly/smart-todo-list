import Container from '@mui/system/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleCheckbox from './CircleCheckbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LoopIcon from '@mui/icons-material/Loop';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function RecipeReviewCard(props) {
  return (
    <Container>
      <Card
        elevation={0}
        sx={{marginTop: "25px"}}
      >
        <CardHeader
          avatar={<CircleCheckbox />}
          action={
            <div>
              <IconButton aria-label="add to high priority">
                <StarBorderIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </div>
          }
          title={
            <Typography variant="body1" color="text.primary">
              {props.task.title}
            </Typography>
          }
          subheader={props.task.due_date}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.task.description}
          </Typography>
        </CardContent>

        <List dense>

          <ListItem sx={{marginTop: "25px"}}>
            <ListItemButton>
              <ListItemIcon>
                < AddCircleOutlineIcon fontSize="medium" color="primary" />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="body1" style={{ color: "steelblue" }}>Step one</Typography>
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

        </List>

      </Card>
    </Container>
  );
}
