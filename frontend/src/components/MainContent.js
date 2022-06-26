import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const rightSidebarWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -rightSidebarWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

export default function RightSidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Main open={open}>
        <Toolbar />
        <Typography paragraph>
          Text
        </Typography>
        <Button variant="text" onClick={handleOpen}>Show Details</Button>
      </Main>
      <Drawer
        sx={{
          width: rightSidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: rightSidebarWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Toolbar />

        <Typography paragraph>
          Details
        </Typography>
        <Button variant="text" onClick={handleClose}>Close</Button>

      </Drawer>
    </Box>
  );
}
