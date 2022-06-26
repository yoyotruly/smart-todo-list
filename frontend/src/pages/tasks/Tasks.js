import Box from '@mui/material/Box';

import TopBar from "../../components/TopBar"
import LeftSidebar from "../../components/LeftSidebar"
import MainContent from '../../components/MainContent';

function Tasks() {
  return (
    <Box sx={{ display: 'flex' }}>

      <TopBar />
      <LeftSidebar />
      <MainContent />

    </Box>
  )
}

export default Tasks;
