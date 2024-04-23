import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

type CardProps = {
   imgPath: string
   alt: string
   body: React.JSX.Element
   title: string
   undertitle?: string
   bgColor?: string
   display?: string
   elevation?: number
}

const MUICard: React.FC<CardProps> = ({
   imgPath,
   alt,
   body,
   title,
   undertitle,
   bgColor,
   display,
   elevation,
}) => {
   return (
      <Card
         sx={{
            display: { display },
            background: { bgColor },
         }}
         elevation={elevation}
      >
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  {title}
               </Typography>
               <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
               >
                  {undertitle}
               </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, p: 2 }}>
               <Typography variant="h6">{body}</Typography>
            </Box>
         </Box>
         <CardMedia
            component="img"
            sx={{ width: '250px' }}
            image={imgPath}
            alt={alt}
         />
      </Card>
   )
}

export default MUICard
