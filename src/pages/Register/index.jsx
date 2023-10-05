import { useState } from 'react'
import { Stack, Button, Box, Chip, Typography, TextField } from '@mui/material';
import Decor from '../../assets/image/decorRegister.png'
import DecorBook from '../../assets/image/decorBookRegister.png'
import Label from '../../assets/image/labelRegister.png'
import './register.css'
import { Link } from 'react-router-dom';
import isEmpty from "validator/lib/isEmpty"

function Register() {

  const [account, setAccount] = useState({
    id: "",
    username: "",
    email: "",
    password: ""
  })
  console.log(account);

  // const [accountList, setAccountList] = useState(() => {
  //   const storageAccount = JSON.parse(localStorage.getItem('account'))
  //   console.log(storageAccount);
  //   return storageAccount
  // })
  

  // const handleSubmit = (prev) => {
  //   const newAccountList = [...prev, account]
  //   const jsonAccountList = JSON.stringify(newAccountList)
  //   localStorage.setItem('account', jsonAccountList)
  //   return newAccountList
  // }


  //Validation
  const [msgValidation, setMsgValidation] = useState('')

  const validateAll = () => {
    const msg = {}
    if (isEmpty(account.username)) {
      msg.username = "Username is required"
    }
    if (isEmpty(account.email)) {
      msg.email = "Email is required"
    }
    if (isEmpty(account.password)) {
      msg.password = "Password is required"
    }

    setMsgValidation(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  //Submit
  const handleRegister = () => {
    const isValid = validateAll()
    if(!isValid) return 
    
  }

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
          height: "100vh"
        }}
      >
        <Box
          sx={{
            width: "35%",
            height: "100%",
            position: "relative",
            backgroundColor: "#DBD8BA",
          }}
        >

          <Box
            component="img"
            alt="Decor"
            src={Decor}
            sx={{
              height: "75%",
              position: 'absolute',

            }}
          />

          <Box>
            <Chip label="Keep it secret"
              sx={{
                backgroundColor: "#899871",
                borderRadius: "50px",
                position: 'absolute',
                typography: {
                  fontFamily: "Roboto",
                  color: "#fff"
                }
              }}
            />
          </Box>

        </Box>


        <Box
          sx={{
            width: "65%",
            height: "100vh",
            backgroundColor: "#659282",
          }}
        >
          <Stack direction="row" spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "1vh",
              marginLeft: "2vh"
            }}
          >

            <Box
              component="img"
              src={DecorBook}
              sx={{
                width: "16vh"
              }}
            />
            <Box
              component="img"
              src={Label}
              sx={{
                width: "16vh"

              }}
            />
          </Stack>
          <Stack direction="column" spacing={1} alignItems="center" marginTop="-16vh">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Dancing Script",
                fontSize: "60px"
              }}
            >Đăng kí
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: 'normal',
              }}
            >
              Cho tôi biết thông tin của bạn nào...
            </Typography>
          </Stack>

          <Stack direction="column" spacing={2} alignItems="center"
            sx={{
              marginTop: "4vh",

            }}
          >

            <TextField id="outlined-basic" label="Tên người dùng" variant="outlined" size="small"
              sx={{
                width: 400,
                maxWidth: "80%",
              }}
              onChange={(e) => {
                setAccount({
                  ...account,
                  username: e.target.value,
                })
              }}
            />
            <p className='errorMsg'>{msgValidation.username}</p>

            <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
              sx={{
                width: 400,
                maxWidth: "80%"
              }}
              onChange={(e) => {
                setAccount({
                  ...account,
                  email: e.target.value,
                })
              }}
            />
            <p className='errorMsg email'>{msgValidation.email}</p>

            <TextField id="outlined-password-input"
              label="Mật khẩu"
              type="password" size="small"
              // autoComplete="current-password"
              onChange={(e) => {
                setAccount({
                  ...account,
                  password: e.target.value,
                })
              }}
              sx={{
                width: 400,
                maxWidth: "80%"
              }}
            />
            <p className='errorMsg'>{msgValidation.password}</p>

            <TextField id="outlined-password-input"
              label="Nhập lại mật khẩu"
              type="password" size="small"
              autoComplete="off"
              // autoComplete="current-password"
              sx={{
                width: 400,
                maxWidth: "80%"
              }}        
            />
            <p className='errorMsg'>{msgValidation.password}</p>
            

            <Button variant="contained"
              sx={{
                display: 'block',
                textTransform: "none",

              }}
              onClick={handleRegister}
            >Đăng kí</Button>
            <Stack direction="row" spacing={2}>
              <Typography
                sx={{
                  color: "#695252",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "12px"
                }}
              >Bạn đã có tài khoản?</Typography>
              <Link to='/login'
              >Đăng nhập</Link>
            </Stack>


          </Stack>

        </Box>

      </Stack>
    </>
  )
}

export default Register