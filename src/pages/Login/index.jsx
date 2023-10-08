import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "../../assets/image/logoSignup.png";
import Contact from "../../assets/image/decorContactSignup.png";
import "../../App.css";
import "./login.css";
import isEmpty from "validator/lib/isEmpty";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import createSlider from "./slide";
import { ACCOUNT_DATA } from "../../data/USERS_DATA";
import { ToastContainer } from "react-toastify";

function Login({ accountList, currentUser, setCurrentUser }) {
  // const [account, setAccount] = useState({
  //   id: "",
  //   username: "",
  //   birthYear: "",
  //   password: ""
  // })
  // const [accountList, setAccountList] = useState([
  //   {
  //     id: 1,
  //     username: "admin",
  //     birthYear:"1999",
  //     password:"123"
  //   },{
  //     id: 2,
  //     username: "manager",
  //     birthYear:"2001",
  //     password:"abc"

  //   }
  // ])
  //Validation
  const [msgValidation, setMsgValidation] = useState("");

  const validateAll = () => {
    let msg = {};
    if (isEmpty(currentUser.username)) {
      msg.username = "*Bắt buộc";
    }
    if (isEmpty(currentUser.password)) {
      msg.password = "*Bắt buộc";
    }

    const accountExist = accountList.some(
      (acc) =>
        acc.username === currentUser.username &&
        acc.password === currentUser.password
    );

    setMsgValidation(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  //Submit
  const navigate = useNavigate();
  const handleLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
    const accountExist = accountList.filter(
      (acc) =>
        acc.username === currentUser.username &&
        acc.password === currentUser.password
    );

    if (accountExist.length === 1) {
      setCurrentUser(accountExist[0]);
      navigate("/");
    }

    //setMsgValidation("Username or Password is incorrect")
    return toast.error("Tên người dùng hoặc mật khẩu không đúng", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // return <Navigate to="/register" replace={true}></Navigate>
  };

  // const handleLogin = () => {
  //   const isValid = validateAll();
  //   if (!isValid) return;

  //   const accountIndex = accountList.findIndex(
  //     (acc) => acc.username === currentUser.username && acc.password === currentUser.password
  //   );

  //   if (accountIndex !== -1) {
  //     // Tài khoản được tìm thấy trong mảng accountList
  //     // Bạn có thể sử dụng accountIndex ở đây
  //     navigate("/");
  //   } else {
  //     // Tài khoản không tồn tại, hiển thị thông báo lỗi
  //     toast.error('Tên người dùng hoặc mật khẩu không đúng', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  console.log(currentUser);
  //Style textField
  const styleBox = {
    borderRadius: "24px",
    backgroundColor: " #EFC2C2",
    width: "60%",
    "& .MuiTextField-root": {
      marginRight: "10% !important",
      borderRadius: "24px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black !important",
      margin: "10px 0 0 10px", // Đổi màu khi label được focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", // Đổi màu của border khi input không focus
      },
      "&:hover fieldset": {
        borderColor: "#5D579A", // Đổi màu của border khi hover vào input
      },
      "&.Mui-focused fieldset": {
        border: "none", // Đổi màu của border khi input được focus
      },
    },
  };

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
            border: "none"
          }
        `}
      </style>

      <Stack
        direction="row"
        sx={{
          backgroundColor: "#FFF6DC",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Box
            component="img"
            alt="Logo"
            src={Logo}
            sx={{
              position: "absolute",
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
              position: "absolute",
              top: 0,
              right: "50%",
              width: "12vh",
            }}
          />

          <Box
            className="word"
            sx={{
              width: "100%",
              marginBottom: "8vh",
              marginTop: "16vh",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Clicker Script",
                fontStyle: "normal",
                textAlign: "center",
                lineHeight: "normal",
                fontWeight: 400,
                fontSize: 60,
              }}
            >
              I'm here...
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 12,
              }}
            >
              Đây là miền kí ức của bạn
            </Typography>
          </Box>

          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "100%",

              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Tên người dùng"
              variant="outlined"
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  username: e.target.value,
                });
              }}
              sx={styleBox}
            />
            <p className="errorMsgLogin">{msgValidation.username}</p>

            <TextField
              id="outlined-password-input"
              label="Mật khẩu"
              type="password"
              autoComplete="off"
              // autoComplete="current-password"
              onChange={(e) => {
                setCurrentUser({
                  ...currentUser,
                  password: e.target.value,
                });
              }}
              sx={styleBox}
            />
            <p className="errorMsgLogin">{msgValidation.password}</p>

            <Button
              variant="contained"
              onClick={handleLogin}
              className="buttonLogin"
              sx={{
                marginLeft: "10%",
              }}
            >
              Đăng nhập
            </Button>
            <Stack direction="row" spacing={4} alignSelf="center">
              <Typography
                sx={{
                  color: "#695252",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "12px",
                }}
              >
                Bạn chưa có tài khoản?
              </Typography>
              <Link
                to="/register"
                sx={{
                  color: "#5D579A",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Đăng kí
              </Link>
            </Stack>
          </Stack>
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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

      <Box></Box>
    </>
  );
}

export default Login;
