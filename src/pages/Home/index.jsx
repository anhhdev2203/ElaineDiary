import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>Day la home page</h1>
        <Link to = "/login"><button>Login</button></Link>

    </>
  )
}

export default Home