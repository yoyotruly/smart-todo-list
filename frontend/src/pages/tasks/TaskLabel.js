import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';

import TopBar from "../../components/TopBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainContent from '../../components/MainContent';
import FloatingAddButton from '../../components/FloatingAddButton';

function TaskLabel() {
  const { labelId } = useParams()

  return (
    <Box sx={{ display: 'flex' }}>

    <FloatingAddButton />
    <TopBar />
    <LeftSidebar />
    <MainContent />

  </Box>
  )
}

export default TaskLabel;
