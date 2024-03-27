import {
  Container,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import './homeContent.css'

type HomeContentProps = {}

const HomeContent: React.FC<HomeContentProps> = () => {
  const paperTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {},
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={paperTheme}>
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
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 340,
                  width: 600,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ height: 340 }}>cadadad sfsefsefsf</Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomeContent
