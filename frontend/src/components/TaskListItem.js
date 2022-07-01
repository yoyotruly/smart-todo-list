import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircleCheckbox from './CircleCheckbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Divider from '@mui/material/Divider';


export default function TaskListItem(props) {

  return (
    <Card elevation={0} sx={{backgroundColor: "inherit"}}>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <CircleCheckbox />

        <Box sx={{flexGrow: 1}}>
          <CardActionArea onClick={props.toggle} sx={{width: "100%"}}>
            <CardContent>
              <Typography variant="body1" color="text.primary" sx={{mb: "5px"}}>
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.due_date} | {props.priority} | {props.label}
              </Typography>
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
