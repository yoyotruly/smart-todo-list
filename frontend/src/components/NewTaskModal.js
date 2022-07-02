import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import ClickMenu from './ClickMenu';
import { labels } from "../data/labels";
import { priorities } from "../data/priorities";

const newTaskModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2
};

export default function NewTaskModal(props) {
  const [formData, setFormData] = React.useState({
    user_id: 1,
    title: "",
    description: "",
    label_id: null,
    priority_id: null,
    due_date: null
  });

  const [label, setLabel] = React.useState(null);
  const deleteLabel = () => setLabel();
  const handleLabelSelection = (item) => {
    setLabel(item.name);

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        label_id: item.id
      }
    })
  }

  let labelColor = "inherit";
  if (label === "To Eat") {
    labelColor = "primary";
  } else if (label === "To Buy") {
    labelColor = "warning";
  } else if (label === "To Read") {
    labelColor = "secondary";
  } else if (label === "To Watch") {
    labelColor = "success";
  };

  const [priority, setPriority] = React.useState(null);
  const deletePriority = () => setPriority(null);
  const handlePrioritySelection = (item) => {
    setPriority(item.name);

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        priority_id: item.id
      }
    })
  }

  let priorityColor = "inherit";
  if (priority === "High") {
    priorityColor = "error";
  } else if (priority === "Medium") {
    priorityColor = "warning";
  } else if (priority === "Low") {
    priorityColor = "success";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

    const toEatKeywords = [/restauran/ig, /steakhous/ig, /eat/ig, /bistr/ig, /sush/ig, /pad tha/ig];
    const toBuyKeywords = [/egg/ig, /turke/ig, /buy/ig];
    const toReadKeywords = [/harry pot/ig, /bookstor/ig, /book/ig, /read/ig];
    const toWatchKeywords = [/movi/ig, /dr. strang/ig, /movie theate/ig, /netfli/ig, /youtub/ig, /watch/ig]

    const title = formData.title;
    if (toBuyKeywords.some(kw => title.match(kw))) {
      handleLabelSelection({id: 1, name: "To Buy"});
    };

    if (toEatKeywords.some(kw => title.match(kw))) {
      handleLabelSelection({id: 2, name: "To Eat"});
    };

    if (toReadKeywords.some(kw => title.match(kw))) {
      handleLabelSelection({id: 3, name: "To Read"});
    }

    if (toWatchKeywords.some(kw => title.match(kw))) {
      handleLabelSelection({id: 4, name: "To Watch"});
    }

    if (title.length <= 1) {
      deleteLabel()
    }

  }

  const handleSubmit = () => {
    fetch(
      "http://localhost:8080/api/tasks",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        props.setTasksData([
          ...props.tasksData,
          data
        ])
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    props.handleClose()
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <Box sx={newTaskModalStyle}>
        <Card elevation={0}>

          <CardHeader
            title={
              <Typography variant="h6" color="text.primary">
                Add a new task
              </Typography>
            }
            sx={{pb: "2px", pl: "20px"}}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            <TextField
              fullWidth
              name="title"
              value={formData.title}
              label="Task Name"
              variant="filled"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              name="description"
              value={formData.description}
              label="Description"
              multiline
              rows={4}
              variant="filled"
              onChange={handleChange}
            />
          </CardContent>

          <CardActions
            sx={{display: "flex", justifyContent: "space-between"}}
          >
            <Box sx={{display: "flex", alignItems: "center"}}>
              <ClickMenu
                icon={<TagRoundedIcon color={labelColor} sx={{ fontSize: "20px" }} />}
                type="label"
                menuItems={labels}
                handleClick={handleLabelSelection}
              />
              {
                label &&
                <Chip
                  label={label}
                  onDelete={deleteLabel}
                  color={labelColor}
                  size="small"
                />
              }
            </Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <ClickMenu
                icon={
                  priority ?
                  <FlagIcon color={priorityColor} sx={{ fontSize: "20px" }} /> :
                  <FlagOutlinedIcon sx={{ fontSize: "20px" }} />
                }
                menuItems={priorities}
                handleClick={handlePrioritySelection}
              />
              {priority &&
                <Chip
                  label={priority}
                  onDelete={deletePriority}
                  size="small"
                />
              }
              <ClickMenu
                icon={<EventOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
              <ClickMenu
                icon={<AccessAlarmOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>

          </CardActions>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: "16px"
            }}
          >
              <Button variant="outlined" onClick={props.handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                endIcon={<ChevronRightIcon />}
              >
                Add Task
              </Button>
          </CardActions>

        </Card>
      </Box>

    </Modal>
  )
}
