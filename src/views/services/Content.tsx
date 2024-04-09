import {
  Paper,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  Container,
} from '@mui/material'
import './content.css'

const Content = () => {
  const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          container: {
            
          },
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
            fontFamily: 'Verdana, sans serif',
          },
        },
      },
      MuiContainer: {
        styleOverrides:{
          disableGutters: {
            background:
              'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
          }
        }
      }
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth={false}>
          <Typography textAlign={'start'} mt={10} variant="h2" color={'white'} padding={5}>
            Vi utför sommar och vinterunderhåll <br /> inom Västra Götaland
          </Typography>
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
                <Typography variant="h5">Snöröj</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>
                <Typography variant="h5">Grus & soppning</Typography>
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
            <Grid item xs={6}>
              {/* <Paper elevation={3}>
                <Typography variant="h5">Snöröj</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>
                <Typography variant="h5">Snöröj</Typography>
              </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Content
