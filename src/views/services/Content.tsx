import {
  Paper,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  Container,
  Box,
  Grow,
} from '@mui/material'
import './content.css'
import { useState } from 'react'
import Map from '../../Map'

const Content = () => {
  const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          container: {},
        },
      },
      MuiPaper: {
        styleOverrides: {
          elevation3: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 0,
            padding: 20,
            border: '1px solid black',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h5: {
            textTransform: 'uppercase',
            fontWeight: 700,
            fontFamily: 'Montserrat',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          disableGutters: {},
        },
      },
    },
  })

  const [checked, setChecked] = useState(true)

  return (
    <>
      <Box mt={10}>
        <Box>
          {checked && (
            <Grow timeout={'auto'} in={checked}>
              <div>
                {/* Render content if checked is true */}
                <ThemeProvider theme={theme}>
                  <Container maxWidth={false}>
                    <Box display={'flex'} pt={2} pb={2}>
                      <Typography
                        textAlign={'start'}
                        mt={10}
                        variant="h2"
                        color={'white'}
                        padding={5}
                        fontFamily={'Montserrat'}
                      >
                        Vi utför sommar och vinterunderhåll <br /> inom Västra
                        Götaland
                      </Typography>
                      <Map />
                    </Box>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        height: 'auto',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Grid item xs={6}>
                        <Paper elevation={3}>
                          <Typography variant="h5">Snöröjning</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper elevation={3}>
                          <Typography variant="h5">Grus & städning</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper elevation={3}>
                          <Typography variant="h5">Tvätt</Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper elevation={3}>
                          <Typography variant="h5">Båt & Marin</Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Container>
                </ThemeProvider>
              </div>
            </Grow>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Content
