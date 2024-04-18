import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const MarineCard = () => {
   return (
      <Card sx={{ display: 'flex' }} elevation={0}>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  Båt & Marin
               </Typography>
               <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
               ></Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, p: 2 }}>
               <Typography variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                  <br /> Alias iste itaque pariatur repudiandae earum cum{' '}
                  <strong>maxime</strong> tenetur?
               </Typography>
            </Box>
         </Box>
         <CardMedia
            component="img"
            sx={{ width: 260 }}
            image="src\assets\marine.jpeg"
            alt="snöröj"
         />
      </Card>
   )
}

export default MarineCard
