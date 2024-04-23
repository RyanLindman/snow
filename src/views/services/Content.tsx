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
import MUICard from './Card'

const Content = () => {
   const [checked, setChecked] = useState(true)

   const theme = createTheme({
      components: {
         MuiGrid: {
            styleOverrides: {
               'spacing-xs-4': {},
            },
         },
         MuiPaper: {
            styleOverrides: {
               elevation3: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  marginTop: 10,
                  background:
                     'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(215,222,255,1) 95%)',
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

   const cardBody = (
      <Typography variant="h6">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Alias
         iste itaque pariatur repudiandae earum cum <strong>maxime</strong>{' '}
         tenetur?
      </Typography>
   )
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
                              <Grid container spacing={4}>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <MUICard
                                          imgPath="src\assets\Snorojning-1200x936.jpg"
                                          alt="wash"
                                          title="snöröjning"
                                          body={cardBody}
                                          display="flex"
                                          elevation={0}
                                       />
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <MUICard
                                          imgPath="src\assets\Snorojning-1200x936.jpg"
                                          alt="wash"
                                          title="Grus & städning"
                                          body={cardBody}
                                          display="flex"
                                          elevation={0}
                                       />
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <MUICard
                                          imgPath="src\assets\Snorojning-1200x936.jpg"
                                          alt="wash"
                                          title="Tvätt"
                                          body={cardBody}
                                          display="flex"
                                          elevation={0}
                                       />
                                    </Paper>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Paper elevation={3}>
                                       <MUICard
                                          imgPath="src\assets\marine.jpeg"
                                          alt="wash"
                                          title="Båt & marin"
                                          body={cardBody}
                                          display="flex"
                                          elevation={0}
                                       />
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
