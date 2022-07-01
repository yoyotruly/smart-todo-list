import Box from '@mui/material/Box';

import TopBar from "../components/TopBar"
import LeftSidebar from "../components/LeftSidebar"
import AddButton from '../components/AddButton';

function Profile() {

  return (
    <Box sx={{ display: 'flex' }}>

      <AddButton />
      <TopBar />
      <LeftSidebar />

    </Box>
  )
}

export default Profile;
