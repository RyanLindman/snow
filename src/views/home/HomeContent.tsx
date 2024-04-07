import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import './homeContent.css'
import Breadcrumbs from '../../Breadcrumbs'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'

type HomeContentProps = {}

const HomeContent: React.FC<HomeContentProps> = () => {
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
            <Grid item xs={6}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundImage: 'url(src/assets/Snorojning-1200x936.jpg)',
                  height: 340,
                  width: 600,
                }}
                elevation={8}
              />
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={9}>
                <Typography variant="h4" fontWeight={700}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus vero. <br />
                  <br />
                </Typography>
                <Typography variant="h5">
                  Eos aut rerum? Fuga a commodi cupiditate Voluptas ab officiis
                  tempora iusto minima eligendi. Eum?
                </Typography>
                <br />
                <Typography variant="h5">
                  Eos aut rerum? Fuga a commodi cupiditate Voluptas ab officiis!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <hr />
          <Typography variant="h1" padding={10}>
            Vi hjälper privata kunder såväl som offentlig sektor
          </Typography>

          <Box
            sx={{
              width: '100%',
              height: '200px',
              background: '#ccc2',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <Box>
              <Breadcrumbs />
            </Box>
            <Box sx={{ display: 'flex', gap: '15px', color: '#ccc' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FacebookIcon />
              </a>
              <a>
                <MailOutlineIcon />
              </a>
              <a>
                <PhoneIcon />
              </a>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomeContent
