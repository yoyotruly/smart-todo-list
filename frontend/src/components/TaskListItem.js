import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircleCheckbox from './CircleCheckbox';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import grey from '@mui/material/colors/grey';
import { useTheme } from '@mui/material/styles';

export default function TaskListItem(props) {
  const theme = useTheme();

  const [isComplete, setIsComplete] = React.useState(false);
  const handleComplete = () => {
    setIsComplete(prevIsComplete => !prevIsComplete);
  }

  return (
    <Card elevation={0} sx={{backgroundColor: "inherit"}}>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <CircleCheckbox
          isComplete={isComplete}
          handleComplete={handleComplete}
        />

        <Box sx={{flexGrow: 1}}>
          <CardActionArea onClick={props.toggle} sx={{width: "100%"}}>
            <CardContent>
              {
                isComplete ?
                  <Typography
                    variant="body1"
                    sx={{
                      mb: "5px",
                      color: theme.palette.mode === 'dark' ? grey[200] : grey[600],
                      textDecoration: "line-through"
                    }}
                  >
                    {props.title}
                  </Typography> :
                  <Typography variant="body1" color="text.primary" sx={{mb: "5px"}}>
                    {props.title}
                  </Typography>
              }

              <Box sx={{display: "flex", gap: "20px", marginTop: "10px"}}>

                {
                  props.dueDate &&
                  <Box sx={{display: "flex", alignItems: "center", gap: "3px"}}>
                    <EventOutlinedIcon sx={{ color: grey[700], fontSize: "15px" }} />
                    <Typography variant="caption" color="text.secondary">
                      {props.due_date}
                    </Typography>
                  </Box>
                }

                {
                  props.priority &&
                  <Box sx={{display: "flex", alignItems: "center", gap: "3px"}}>
                    <FlagOutlinedIcon sx={{ color: grey[700], fontSize: "15px" }} />
                    <Typography variant="caption" color="text.secondary">
                      {props.priority}
                    </Typography>
                  </Box>
                }

                {
                  props.label &&
                  <Box sx={{display: "flex", alignItems: "center", gap: "3px"}}>
                    <TagRoundedIcon sx={{ color: grey[700], fontSize: "15px" }} />
                    <Typography variant="caption" color="text.secondary" >
                      {props.label}
                    </Typography>
                  </Box>
                }

              </Box>

            </CardContent>
          </CardActionArea>
        </Box>

        <IconButton aria-label="delete" onClick={() => props.handleDelete(props.task_id)}>
          <DeleteOutlineIcon />
        </IconButton>

      </Box>

      <Divider component="li" />

    </Card>
  );
}
