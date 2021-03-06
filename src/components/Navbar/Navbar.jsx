import React from 'react'
import {AppBar, Toolbar, IconButton, MenuItem, Menu, Typography} from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position = "fixed" className = {classes.AppBar} color = "inherit">
        <Toolbar>
          <Typography variant="h6" className = {classes.title}>
            <img src = './keyboard.svg' alt = "Which Switch" height = "25px" className = {classes.image} />
            Which Switch?
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar
