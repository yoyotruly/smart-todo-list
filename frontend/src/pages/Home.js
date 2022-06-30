import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} columns={16}>
        <CssBaseline />

        <Grid
          item
          xs={8}
          direction='column'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          textAlign='center'
          square>
            <Box
            sx={{
              my: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
          <Typography component="h1" variant="h3" align="left">
            Stay Organized <br/>
            Stay Creative
          </Typography>
          <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate('/register')}
              >
                JOIN TODAY
              </Button>
            </Box>
        </Grid>

        <Grid
          item
          xs={8}
          direction='column'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          textAlign='center'
          square
          sx={{
            backgroundImage: 'url(./homepage-hero.png)',
            backgroundColor: (t) =>
              t.palette.mode === 'light',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
