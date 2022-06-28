import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import NewTaskCard from './NewTaskCard';

const newTaskModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FloatingActionButtons() {
  const [open, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Fab
        color="primary"
        onClick={handleOpenModal}
        sx={{
          position: "absolute",
          left: 30,
          bottom: 30,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <AddIcon/>
      </Fab>

      <Modal
        open={open}
        onClose={handleCloseModal}
      >
        <Box sx={newTaskModalStyle}>
          <NewTaskCard />
        </Box>
      </Modal>
  </div>
  );
}