import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default function Header({ handleDrawerToggle, classes }) {
  return <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => handleDrawerToggle()}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Responsive drawer
 </Typography>
    </Toolbar>
  </AppBar>
}