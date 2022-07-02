import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <img src={"./logo-dark.png"} alt="The Sorting App!" width="200px" />
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Help</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
