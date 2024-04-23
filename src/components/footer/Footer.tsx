import { Box, Grid } from '@mui/material'
import React from 'react'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'

const Footer = () => {
   return (
      <Grid container pl={2} pr={2}>
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
               mt: 15,
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
               <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
               >
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
      </Grid>
   )
}

export default Footer
