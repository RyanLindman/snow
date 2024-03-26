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
          root: {
            
          },
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={paperTheme}>
        <Container>
          <Grid container>
            <Paper elevation={3}>

            </Paper>

            <Paper elevation={3}>

            </Paper>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomeContent
