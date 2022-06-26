import Box from '@mui/material/Box';

import TopBar from "../../components/TopBar"
import Sidebar from "../../components/Sidebar"
import MainContent from '../../components/MainContent';

function Tasks() {
  return (
    <Box sx={{ display: 'flex' }}>

      <TopBar />
      <Sidebar />
      <MainContent />

    </Box>
  )
}

export default Tasks;
