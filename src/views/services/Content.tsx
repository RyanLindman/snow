import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React from 'react'
import './content.css'
import { Height } from '@mui/icons-material'

const Content = () => {
  const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          container: {
            background:
              'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
          },
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid bgcolor={'#ccc2'} height={'150px'}>
        </Grid>


        <Grid container sx={{ height: 'auto', justifyContent: 'center', flexDirection:'column', alignItems: 'center' }}>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5">Snöröj</Typography>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Content
