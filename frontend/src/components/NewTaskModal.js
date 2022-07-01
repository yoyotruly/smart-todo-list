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
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import Typography from '@mui/material/Typography';

import ClickMenu from './ClickMenu';

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
  const [label, setLabel] = React.useState("");
  const selectLabel = (label) => setLabel(label);
  const deleteLabel = () => setLabel("");

  let labelColor;
  if (label === "To Eat") {
    labelColor = "primary";
  } else if (label === "To Buy") {
    labelColor = "warning";
  } else if (label === "To Read") {
    labelColor = "secondary";
  } else if (label === "To Watch") {
    labelColor = "success";
  };

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
            <Box sx={{display: "flex", alignItems: "center"}}>
              <ClickMenu
                icon={<TagRoundedIcon sx={{ fontSize: "20px" }} />}
                menuItems={[
                  {id: 1, name: "To Eat"},
                  {id: 2, name: "To Buy"},
                  {id: 3, name: "To Read"},
                  {id: 4, name: "To Watch"}
                ]}
                selectMenuItem={selectLabel}
              />
                {label &&
                  <Chip
                    label={label}
                    // onClick={handleClick}
                    onDelete={deleteLabel}
                    variant="outlined"
                    color={labelColor}
                    size="small"
                  />
                }
            </Box>
            {/* <Box sx={{display: "flex"}}>
              <ClickMenu
                icon={<FlagOutlinedIcon sx={{ fontSize: "20px" }} />}
                menuItems={["High", "Medium", "Low"]}
              />
              <ClickMenu
                icon={<EventOutlinedIcon sx={{ fontSize: "20px" }} />}
                menuItems={["Today", "Tomorrow"]}
              />
              <ClickMenu
                icon={<AccessAlarmOutlinedIcon sx={{ fontSize: "20px" }} />}
              />
            </Box> */}

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
              <Button variant="contained">
                Add Task
              </Button>
          </CardActions>

        </Card>
      </Box>

    </Modal>
  )
}
