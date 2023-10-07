import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Container } from "@mui/system";
import {
  Button,
  Card,
  CardMedia,
  Hidden,
  InputBase,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/system";
// import {Swiper} from "swiper";
import imgAdd from "../../assets/image/imgImport.png";
import musicAdd from "../../assets/image/musicImport.png";
import imgAddBtn from "../../assets/image/addImgBtn.png";
import musicAddBtn from "../../assets/image/musicAddBtn.png";
import binderNote from "../../assets/image/binderNote.png";
import verysad from "../../assets/image/verysad.png";
import sad from "../../assets/image/sad.png";
import normal from "../../assets/image/normal.png";
import happy from "../../assets/image/happy.png";
import veryhappy from "../../assets/image/veryhappy.png";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import socong from "../../assets/image/socong.png";

const dateTitle = styled(Typography)({
  color: "#5B3C6D",
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  display: "flex",
  flex: 3,
  justifyContent: "center",
});
const Title = styled(Typography)({
  color: "rgba(114, 80, 185, 0.92)",
  fontFamily: " Dancing Script",
  fontSize: "90px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  textAlign: "center",
});
const CodeButton = styled(Button)({
  width: "200px",
  height: "57px",
  borderRadius: "24px",
  color: "#FFF",
  backgroundColor: "#BFACC8",
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#BFACC8",
    },
  },
});

function CreateDiary() {
  //const [value, setValue] = useState(true);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    console.log("Done");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: "70px",
          backgroundColor: "#F3F6EC",
        }}
      >
        <Container sx={{ maxWidth: "xl" }}>
        
            <Stack
              display="flex"
              flexDirection="row"
              paddingTop="40px"
              alignItems="center"
            >
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                flex="3"
              >
                <ArrowBackIcon
                  fontSize="large"
                  sx={{ marginRight: "32px" }}
                ></ArrowBackIcon>

                {/* Create code to share */}
                <CodeButton color="primary" onClick={toggleMenu}>
                  Tạo mã code
                </CodeButton>
              </Stack>

              <Title display="flex" flex="7">
                Viết nhật kí mới
              </Title>

              {/* Icon heart and headphone */}
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                flex="3"
              >
                <FavoriteBorderIcon
                  sx={{
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    flex: "1",
                  }}
                ></FavoriteBorderIcon>
                <HeadsetOutlinedIcon
                  sx={{ width: "84px", height: "54px", flex: "1" }}
                ></HeadsetOutlinedIcon>
              </Stack>
            </Stack>

            {/* Commnent let write */}
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="end"
            >
              <Typography
                display="flex"
                flex="5"
                justifyContent="center"
                sx={{
                  color: "#574B65",
                  textAlign: " center",
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {" "}
                Viết nhật kí mới nào
              </Typography>
              <Typography
                sx={{
                  color: "#5B3C6D",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  display: "flex",
                  flex: 3,
                  justifyContent: "center",
                }}
              >
                {formattedDate}
              </Typography>
            </Stack>

            {/* <Modal
              open={isMenuOpen}
              onClose={toggleMenu}
            >
              <Card
                sx={{
                  Width: "700px",
                  height: "365px",
                  borderRadius: "40px",
                  backgroundColor: "#F5ECF9",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: '2px solid #FFF'
                }}
              >
                <CloseOutlinedIcon></CloseOutlinedIcon>
                <Typography>Nhập mã chia sẻ</Typography>
                <InputBase>Code</InputBase>
                <Button>Copy</Button>
              </Card>
            </Modal> */}
            {/* Write a diary */}
            <Stack
              display="flex"
              alignSelf="center"
              style={{ border: "1px solid #000", borderRadius: "30px" }}
              sx={{
                width: "920px",
                height: "480px",
                backgroundColor: "#E3DDE5",
              }}
            >
              <Box style={{ borderBottom: "1px solid #000", height: "50px" }}>
                <InputBase
                  placeholder="Tiêu đề nhật kí"
                  style={{
                    color: "#5B3C6D",
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginLeft: "100px",
                  }}
                 
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        color: "#5B3C6D",
                        opacity: 1, // otherwise firefox shows a lighter color
                      },
                    },
                  }}
                >
                  Tiêu đề nhật kí
                </InputBase>
              </Box>
              <Stack display="flex" flexDirection="row">
                <CardMedia
                  component="img"
                  image={socong}
                  sx={{ width: "100px", height: "440px" }}
                ></CardMedia>
              <Stack display="flex" flexDirection="row">
                <CardMedia
                  component="img"
                  image={socong}
                  sx={{ width: "100px", height: "440px" }}
                ></CardMedia>
                <InputBase
                  placeholder="Nhập nội dung nhật kí"
                  style={{
                    color: "#5B3C6D",
                    width: "720px",
                    height: "360px",
                    display: "flex",
                    alignItems: "baseline",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    marginTop: "30px",
                    padding: "12px",
                  }}
                 
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        color: "#5B3C6D",
                        opacity: 1, // otherwise firefox shows a lighter color
                      },
                    },
                  }}
                ></InputBase>
                {/* <Swiper >
                </Swiper> */}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" paddingTop="40px">
            <Stack direction="column" flex="1" marginRight="20px">
              <Box component="img" src={imgAdd} alt="" />
              <Box component="img" src={imgAddBtn} alt="" />
            </Stack>
            <Stack direction="column" flex="1">
              <Box component="img" src={musicAdd} alt="" />
              <Box component="img" src={musicAddBtn} alt="" />
            </Stack>
            <Stack
              flex="14"
              flexDirection="row"
              justifyContent="end"
              alignItems="end"
              paddingBottom="30px"
            >
              <Box
                sx={{ width: "141px", height: " 158px" }}
                component="img"
                src={verysad}
                alt=""
              />
              <Box
                sx={{ width: "141px", height: " 158px" }}
                component="img"
                src={sad}
                alt=""
              />
              <Box
                sx={{ width: "141px", height: " 158px" }}
                component="img"
                src={normal}
                alt=""
              />
              <Box
                sx={{ width: "141px", height: " 158px" }}
                component="img"
                src={happy}
                alt=""
              />
              <Box
                sx={{ width: "141px", height: " 158px" }}
                component="img"
                src={veryhappy}
                alt=""
              />
            </Stack>
            <SaveAltOutlinedIcon
              sx={{
                width: "80px",
                height: "80px",
                display: "flex",
                alignSelf: "end",
                paddingBottom: "30px",
              }}
            ></SaveAltOutlinedIcon>
          </Stack>
        </Container>
      </Box>
    </>
  );
}


export default CreateDiary;
