import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './navbar.css'
import {
   CssBaseline,
   AppBar,
   Toolbar,
   Container,
   Box,
   Slide,
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Props } from '../../interfaces/interfaces'
import { navOption } from '../../interfaces/types'

function HideOnScroll(props: Props) {
   const { children, window } = props
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   })
   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   )
}

const Navbar: React.FC<Props> = (props: Props) => {
   return (
      <React.Fragment>
         <CssBaseline />
         <HideOnScroll {...props}>
            <AppBar>
               <Toolbar
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     height: 140,
                     background:
                        'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
                  }}
               >
                  <Link to={'/'}>
                     <img src="src\assets\image.png" alt="logo" id="logo" />
                  </Link>
                  <div className="nav-options">
                     {props.items?.map((item: navOption, index: number) => (
                        <span key={index}>
                           <button className="btn">
                              <Link
                                 style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                 }}
                                 to={item.path || ''}
                              >
                                 {item.name}
                              </Link>
                           </button>
                        </span>
                     ))}
                  </div>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
         <Toolbar />
         <Container>
            <Box sx={{ my: 2 }}></Box>
         </Container>
      </React.Fragment>
   )
}

export default Navbar
