import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const SnowCard = () => {
   return (
      <Card
         sx={{
            display: 'flex',
            background:
               'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(215,222,255,1) 95%)',
         }}
         elevation={0}
      >
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  Snöröjning
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
            image="src\assets\Snorojning-1200x936.jpg"
            alt="snöröj"
         />
      </Card>
   )
}

export default SnowCard
