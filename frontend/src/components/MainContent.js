import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
    <Toolbar />
    <Typography paragraph>
      This is tasks overview page
    </Typography>

    </Box>
  )
}


