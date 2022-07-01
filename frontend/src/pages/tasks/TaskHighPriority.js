import Box from '@mui/material/Box';

import TopBar from "../../components/TopBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainContent from '../../components/MainContent';
import AddButton from '../../components/AddButton';


function TaskHighPriority() {
  return (
    <Box sx={{ display: 'flex' }}>

      <AddButton />
      <TopBar />
      <LeftSidebar />
      <MainContent />

    </Box>
  )
}

export default TaskHighPriority;
