import { AppBar, Box, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import elaine from "../../assets/image/elaine.png"
import people from "../../assets/image/logochandung.png"
import triangle from "../../assets/image/logotamgiac.png"

function Header() {
  return (
    <>
    {/* <Box>
    <img
        src={elaine}
      />
      <List>
        <ListItem>An Hoang</ListItem>
        <img src = {people}></img>
        <img src ={triangle}></img>
      </List>
    </Box> */}

    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" component="nav"> 
        <Toolbar>
        <img
        src={elaine}
        />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            An Hoang
          </Typography>
          <img src = {people}></img>
        <img src ={triangle}></img>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header