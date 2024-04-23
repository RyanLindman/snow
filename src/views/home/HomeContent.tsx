import {
   Box,
   Container,
   Grid,
   Paper,
   Slide,
   ThemeProvider,
   Typography,
   createTheme,
} from '@mui/material'
import './homeContent.css'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'

type HomeContentProps = {}

const HomeContent: React.FC<HomeContentProps> = () => {
   const [checked, setChecked] = useState(true)

   const theme = createTheme({
      components: {
         MuiPaper: {
            styleOverrides: {
               elevation9: {
                  textAlign: 'center',
                  alignContent: 'center',
                  height: 340,
                  backgroundColor: '#ccc3',
                  padding: '20px',
               },
               elevation8: {
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               },
            },
         },
         MuiTypography: {
            styleOverrides: {
               root: {
                  color: 'white',
                  fontFamily: 'Nunito sans',
                  letterSpacing: 0.5,
               },
            },
         },
      },
   })

   return (
      <>
         <ThemeProvider theme={theme}>
            <Container
               maxWidth={false}
               sx={{
                  background:
                     'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
               }}
            >
               <Grid container padding={10}>
                  {checked && (
                     <Slide timeout={700} in={checked} direction="right">
                        <Grid item xs={6}>
                           <Paper
                              sx={{
                                 padding: 2,
                                 backgroundImage:
                                    'url(src/assets/Snorojning-1200x936.jpg)',
                                 height: 340,
                                 width: 600,
                              }}
                              elevation={8}
                           />
                        </Grid>
                     </Slide>
                  )}
                  {checked && (
                     <Slide in={checked} direction="left">
                        <Grid item xs={6}>
                           <Paper elevation={9}>
                              <Typography variant="h4" fontWeight={700}>
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Necessitatibus vero. <br />
                                 <br />
                              </Typography>
                              <Typography variant="h5">
                                 Eos aut rerum? Fuga a commodi cupiditate
                                 Voluptas ab officiis tempora iusto minima
                                 eligendi. Eum?
                              </Typography>
                              <br />
                              <Typography variant="h5">
                                 Eos aut rerum? Fuga a commodi cupiditate
                                 Voluptas ab officiis!
                              </Typography>
                           </Paper>
                        </Grid>
                     </Slide>
                  )}
               </Grid>
               <hr />
               <Typography variant="h1" padding={10}>
                  Vi hjälper privata kunder såväl som offentlig sektor
               </Typography>
               <Footer />
            </Container>
         </ThemeProvider>
      </>
   )
}

export default HomeContent
