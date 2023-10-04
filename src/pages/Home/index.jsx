import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box sx ={{background: "red"}}>
        <h1>Day la home page</h1>
        <Link to = "/login"><button>Login</button></Link>

    </Box>
  )
}

export default Home