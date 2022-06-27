import Box from '@mui/material/Box';

import TopBar from "../../components/TopBar"
import LeftSidebar from "../../components/LeftSidebar"
import FloatingAddButton from '../../components/FloatingAddButton';


function TaskHighPriority() {
  return (
    <Box sx={{ display: 'flex' }}>

      <FloatingAddButton />
      <TopBar />
      <LeftSidebar />

    </Box>
  )
}

export default TaskHighPriority;
