import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircleCheckbox from './CircleCheckbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import grey from '@mui/material/colors/grey';

export default function TaskListItem(props) {
  return (
    <Card elevation={0} sx={{backgroundColor: "inherit"}}>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <CircleCheckbox checked={props.isComplete}/>

        <Box sx={{flexGrow: 1}}>
          <CardActionArea onClick={props.toggle} sx={{width: "100%"}}>
            <CardContent>
              <Typography variant="body1" color="text.primary" sx={{mb: "5px"}}>
                {props.title}
              </Typography>

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

        <IconButton aria-label="star">
          <StarBorderOutlinedIcon />
        </IconButton>

      </Box>

      <Divider component="li" />

    </Card>
  );
}
