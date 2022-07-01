import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

const newTaskModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 6
};

export default function NewTaskModal(props) {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <Box sx={newTaskModalStyle}>
        <Card elevation={0}>

          <CardHeader title={"Add New Task"} />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            <TextField
              fullWidth
              id="task-name"
              label="Task Name"
              variant="filled"
            />

            <TextField
              fullWidth
              id="description"
              label="Description"
              multiline
              rows={4}
              variant="filled"
            />
          </CardContent>

          <CardActions
            sx={{display: "flex", justifyContent: "space-between"}}
          >
            <Box>
              <IconButton aria-label="priority">
                <TagRoundedIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton aria-label="priority">
                <FlagOutlinedIcon />
              </IconButton>
              <IconButton aria-label="schedule">
                <EventOutlinedIcon />
              </IconButton>
              <IconButton aria-label="reminder">
                <AccessAlarmOutlinedIcon />
              </IconButton>
            </Box>

          </CardActions>

          <CardActions sx={{display: "flex", justifyContent: "flex-end"}}>
              <Button variant="outlined" onClick={props.handleClose}>
                Cancel
              </Button>
              <Button variant="contained">
                Add Task
              </Button>
          </CardActions>

        </Card>
      </Box>

    </Modal>
  )
}
