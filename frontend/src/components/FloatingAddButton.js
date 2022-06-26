import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtons() {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "absolute",
        left: 30,
        bottom: 20,
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <AddIcon />
    </Fab>
  );
}
