import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Box, Button, Slide, Stack, TextField, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Logo from '../../assets/image/logoSignup.png'
import Contact from '../../assets/image/decorContactSignup.png'
import '../../App.css'
import './login.css'
import isEmpty from "validator/lib/isEmpty"
import { useState } from 'react'
import Register from '../Register';

import createSlider from './slide';


function Login() {
  const [account, setAccount] = useState({
    id: "",
    username: "",
    birthYear: "",
    password: ""
  })

  const [accountList, setAccountList] = useState([
    {
      id: 1,
      username: "admin",
      birthYear:"1999",
      password:"123"
    },{
      id: 2,
      username: "manager",
      birthYear:"2001",
      password:"abc"
      
    }
  ])
  //Validation
  const [msgValidation, setMsgValidation] = useState('')

  const validateAll = () => {
    const msg = {}
    if (isEmpty(account.username)) {
      msg.username = "Username is required"
    }
    if (isEmpty(account.password)) {
      msg.password = "Password is required"
    }

    setMsgValidation(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  //Submit

  const handleLogin = () => {
    const isValid = validateAll()
    if (!isValid) return
    
    const accountExist = accountList.find( accountInput => {
      accountInput.username === account.username && accountInput.password === account.password
    })
    if(accountExist) return  window.location.href = '/'
    
    // return <Navigate to="/register" replace={true}></Navigate>
    
  }

  console.log(account);

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
          }
        `}
      </style>


      <Stack direction="row"
        sx={{
          backgroundColor: "#FFF6DC",
          height: "100vh",
          position: 'relative'
        }}
      >
        <Box
          sx={{
            width: "50%"
          }}
        >
          <Box
            component="img"
            alt="Logo"
            src={Logo}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: "24vh",

            }}
          />
          <Box
            component="img"
            alt="Contact"
            src={Contact}
            sx={{
              position: 'absolute',
              top: 0,
              right: "50%",
              width: "12vh",
            }}
          />

          <Box className="word"
            sx={{
              width: "100%",
              marginBottom: "8vh",
              marginTop: "20vh",

            }}>
            <Typography
              sx={{
                fontFamily: "Clicker Script",
                fontStyle: "normal",
                textAlign: "center",
                lineHeight: "normal",
                fontWeight: 400,
                fontSize: 64,


              }}
            >I'm here...</Typography>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: 12
              }}
            >Đây là miền kí ức của bạn</Typography>
          </Box>

          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "70%",
              marginLeft: "5%",
              alignItems: 'center',
            }}
          >
            <TextField id="outlined-basic" label="Tên người dùng" variant="outlined"
             onChange={(e) => {
              setAccount({
                ...account,
                username: e.target.value,
              })
            }}
            />
            <p className='errorMsg'>{msgValidation.username}</p>

            <TextField id="outlined-password-input"
              label="Mật khẩu"
              type="password"
              autoComplete="off"
            // autoComplete="current-password"
            onChange={(e) => {
              setAccount({
                ...account,
                password: e.target.value,
              })
            }}
            />
            <p className='errorMsg'>{msgValidation.password}</p>

            <Button variant="contained" onClick={handleLogin}>Đăng nhập</Button>
            <Stack direction="row" spacing={4} alignSelf="center">
              <Typography
                sx={{
                  color: "#695252",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "12px"
                }}
              >Bạn chưa có tài khoản?</Typography>
              <Link to='/register'
                sx={{
                  color: "#5D579A",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >Đăng kí</Link>
            </Stack>
          </Stack>
        </Box>
        <Box
          width="50%"
          height="100vh"
          position="absolute"
          overflow="hidden"
          top="0"
          right="0"
        >
          {createSlider()}

        </Box>

      </Stack>

      <Box

      ></Box>
    </>
  )
}

export default Login