import { useState } from 'react'
import { Stack, Button, Box, Chip, Typography, TextField } from '@mui/material';
import Decor from '../../assets/image/decorRegister.png'
import DecorBook from '../../assets/image/decorBookRegister.png'
import Label from '../../assets/image/labelRegister.png'
import './register.css'
import { Link } from 'react-router-dom';
function Register() {
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
            position:"relative",
            backgroundColor:"#DBD8BA",
          }}
        >

          <Box
            component="img"
            alt="Decor"
            src={Decor}
            sx={{
              height: "75%",
              position:'absolute',
              
            }}
          />

          <Box>
            <Chip label="Keep it secret"
              sx={{
                backgroundColor: "#899871",
                borderRadius: "50px",
                position:'absolute',
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
          <Stack direction="column" spacing={1} alignItems="center" marginTop="-12vh">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Dancing Script",
                fontSize: "64px"
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
            marginTop:"4vh", 
         
          }}
          >
           
            <TextField id="outlined-basic" label="Tên người dùng" variant="outlined" size="small"
            sx={{
               width:400,
              maxWidth:"80%",
            }}
            />
            <TextField id="outlined-basic" label="Năm sinh" variant="outlined" size="small"
             sx={{
               width:400,
               maxWidth:"80%"
            }}
            />
            <TextField id="outlined-password-input"
              label="Mật khẩu"
              type="password" size="small"
              // autoComplete="current-password"
              sx={{
                width:400,
                maxWidth:"80%"
             }}
            />
             <TextField id="outlined-password-input"
              label="Nhập lại mật khẩu"
              type="password" size="small"
              autoComplete="off"
              // autoComplete="current-password"
              sx={{
                width:400,
                maxWidth:"80%"
             }}
            />
            <Button variant="contained"
            sx={{
              display:'block',
              textTransform:"none",
              
            }}
            >Đăng kí</Button>
            <Stack direction="row" spacing={2}>
              <Typography
              sx={{
                color: "#695252",
                fontFamily: "Be Vietnam Pro",
                fontSize:"12px"
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