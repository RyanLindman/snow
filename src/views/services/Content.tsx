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
import SnowCard from './SnowCard'
import MarineCard from './MarineCard'
import GravelCard from './GravelCard'

const Content = () => {
   const theme = createTheme({
      components: {
         MuiGrid: {
            styleOverrides: {},
         },
         MuiPaper: {
            styleOverrides: {
               elevation3: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  marginTop: 10,
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
                              <Box
                                 display={'flex'}
                                 pt={2}
                                 pb={2}
                                 
                                 justifyContent={'center'}
                              >
                                 <Typography
                                    textAlign={'start'}
                                    mt={5}
                                    variant="h2"
                                    color={'white'}
                                    padding={'40px 0px'}
                                    fontFamily={'Montserrat'}
                                 >
                                    Vi utför{' '}
                                    <span id="bold-italic">sommar-</span> och{' '}
                                    <span id="bold-italic">
                                       vinterunderhåll
                                    </span>{' '}
                                    <br /> inom Västra Götaland
                                 </Typography>
                                 <Map />
                              </Box>
                              <Grid
                                 container
                                 spacing={4}
                                 sx={{
                                    height: 'auto',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                 }}
                              >
                                 <Grid item xs={6}>
                                    <Paper
                                       elevation={3}
                                       sx={{
                                          background:
                                             'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(215,222,255,1) 95%)',
                                       }}
                                    >
                                       <SnowCard />
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper
                                       elevation={3}
                                       sx={{
                                          background:
                                             'linear-gradient(90deg, rgba(215,222,255,1) 5%, rgba(255,255,255,1) 100%)',
                                       }}
                                    >
                                       <GravelCard />
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <Typography variant="h5">
                                          Tvätt
                                       </Typography>
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <MarineCard />
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
