import Container from '@mui/system/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleCheckbox from './CircleCheckbox';
import TaskDetailOptions from './TaskDetailOptions';

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

        <TaskDetailOptions />

      </Card>
    </Container>
  );
}
