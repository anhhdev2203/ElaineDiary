import { useState } from 'react'
import { Stack, Button, Box, Chip, Typography, TextField } from '@mui/material';
import Decor from '../../assets/image/decorRegister.png'
import DecorBook from '../../assets/image/decorBookRegister.png'
import Label from '../../assets/image/labelRegister.png'
import './register.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import isEmpty from "validator/lib/isEmpty"
function Register({ setAccountList, accountList, currentUser, setCurrentUser }) {

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
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (isEmpty(currentUser.username)) {
      msg.username = "*Bắt buộc"
    }

    // if(passwordPattern.test(currentUser.password)){
    //   msg.password = "Password should have at least 8 character and contains at least one uppercase, one lowercase and a number"
    // }
    if (currentUser.password.length < 8 && currentUser.password.length > 0) {
      msg.password = "*Độ dài mật khẩu ít nhất 8 chữ số"
    }

    if (isEmpty(currentUser.retakepassword)) {
      msg.retakepassword = "*Bắt buộc"
    }

    if (currentUser.password !== currentUser.retakepassword) {
      msg.retakepassword = "*Mật khẩu không khớp"
    }

    const birthYearPattern = /^(19\d\d|20[01]\d|202[0-3])$/;

    if (!birthYearPattern.test(currentUser.birthdayYear)) {
      msg.birthdayYear = "*Năm sinh bắt buộc từ 1900-2023";
    }

    if (isEmpty(currentUser.password)) {
      msg.password = "*Bắt buộc"
    }
    if (isEmpty(currentUser.birthdayYear)) {
      msg.birthdayYear = "*Bắt buộc"
    }

    if (accountList.some(acc => (acc.username === currentUser.username))) {
      msg.username = "*Tên người dùng bị trùng"
    }



    setMsgValidation(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  //Submit
  const navigate = useNavigate()

  const handleRegister = () => {
    const isValid = validateAll()
    if (!isValid) return
    else {
      setCurrentUser(currentUser)
      setAccountList(prev => [...prev, currentUser])
      navigate('/')
      
    }



  }
  console.log(currentUser);
  //Style
  const styleBox = {
    borderRadius: "24px",
    width: 400,
    maxWidth: "80%",
    marginLeft: "185px",
    marginTop: "20px",
    '& .MuiTextField-root': {
      marginRight: "10% !important",
      borderRadius: "24px",
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: "black !important",
      margin: "10px 0 0 10px"// Đổi màu khi label được focus
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: "none", // Đổi màu của border khi input không focus
      },
      '&:hover fieldset': {
        borderColor: 'red', // Đổi màu của border khi hover vào input
      },
      '&.Mui-focused fieldset': {
        border: "none", // Đổi màu của border khi input được focus
      },
    },
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
          <Stack direction="column" spacing={1} alignItems="center" marginTop="-8vh">
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
            sx={styleBox}
          >

            <TextField id="outlined-basic" label="Tên người dùng" variant="outlined" size="small"
              sx={styleBox}
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  username: e.target.value,
                })
              }}
              // value={currentUser.username}
              InputProps={{
                style: { border: 'none', width: '100%', outline: 'none', fontSize: '13px' }, // Change the font size
              }}
            />
            <p className='errorMsg'>{msgValidation.username}</p>

            <TextField id="outlined-basic" label="Năm sinh" variant="outlined" size="small"
              sx={{
                width: 400,
                maxWidth: "80%"
              }}
              InputProps={{
                style: { border: 'none', width: '100%', outline: 'none', fontSize: '13px' }, // Change the font size
              }}
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  birthdayYear: e.target.value,
                })
              }}
              //value={currentUser.birthdayYear}
            />
            <p className='errorMsg email'>{msgValidation.birthdayYear}</p>


            <TextField id="outlined-password-input"
              label="Mật khẩu"
              type="password" size="small"
              // autoComplete="current-password"
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  password: e.target.value,
                })
              }}
              //value={currentUser.password}
              sx={{
                width: 400,
                maxWidth: "80%"
              }}
              InputProps={{
                style: { border: 'none', width: '100%', outline: 'none', fontSize: '13px' }, // Change the font size
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
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  retakepassword: e.target.value,
                })
              }}
             // value={currentUser.retakepassword}
              InputProps={{
                style: { border: 'none', width: '100%', outline: 'none', fontSize: '13px' }, // Change the font size
              }}
            />
            <p className='errorMsg'>{msgValidation.retakepassword}</p>


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