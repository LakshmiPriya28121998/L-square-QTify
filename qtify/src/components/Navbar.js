

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Button from './Button';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';
import styles from "./Navbar.module.css"
import buttonstyles from "./Button.module.css"
import Search from './Search';

export default function ButtonAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" className={styles.navbar}>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <Logo />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         <Search />
    //       </Typography>
    //       <Button className={buttonstyles.button}>Give Feedback</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    <Box className={styles.header}>
      <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Search />
          <Button className={buttonstyles.button}>Give Feedback</Button>
    
  </Box>
  );
}