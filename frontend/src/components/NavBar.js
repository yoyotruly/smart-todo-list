import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import grey from '@mui/material/colors/grey';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{backgroundColor: grey[300]}}
      >
        <Toolbar sx={{display: "flex", alignItems: "flex-end", mb: "18px" }}>
          <img src={"./logo-light.png"} alt="The Sorting App!" height="52px" />
          <Box mr="auto" ml="30px">
            <Button sx={{color: grey[800]}}>Features</Button>
            <Button sx={{color: grey[800]}}>Pricing</Button>
            <Button sx={{color: grey[800]}}>Contact</Button>
            <Button sx={{color: grey[800]}}>Help</Button>
          </Box>
          <Box>
            <Button sx={{color: grey[800]}} href="/login">Login</Button>
            <Button sx={{color: grey[800]}} href="/register">Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
