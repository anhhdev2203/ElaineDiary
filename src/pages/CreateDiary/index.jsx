import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Container } from "@mui/system";
import { Button, CardMedia, InputBase, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import { ContentBox } from "../MyDiaryDetail/data/contentBox";
import {Swiper} from "swiper";

import socong from "../../assets/image/socong.png"

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
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <>
      <Box
        sx={{
          paddingTop: "90px",
          backgroundColor: "#F3F6EC",
        }}
      >
        <Container sx={{ maxWidth: "xl" }}>
          <Stack>
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
                <CodeButton color="primary">Tạo mã code</CodeButton>
              </Stack>

              <Title display="flex" flex="7">
                Viết nhật kí mới
              </Title>
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

            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="end"
            >
              <Box flex="3"></Box>
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

            <Stack
              sx={{
                width: "920px",
                height: "480px",
                backgroundColor: "#E3DDE5",
              }}
            >
              <Box style={{ borderBottom: "1px solid #000", height: "50px" }}>
                <InputBase
                  placeholder="Tiêu đề nhật kí"
                  style={{ color: "#5B3C6D", fontFamily: "Roboto", fontSize: "24px", fontWeight: 600, textAlign: "center" , marginLeft: "100px"}}
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
              <Stack display="flex" flexDirection ="row" >
                <CardMedia component = "img" image={socong} sx = {{width: '100px', height: '440px'}}></CardMedia>
                <InputBase
                  placeholder="Nhập nội dung nhật kí"
                  style={{ color: "#5B3C6D", width: "720px", height : "360px", display: "flex", alignItems: "baseline", fontFamily:"Roboto", fontSize: "20px", marginTop: "30px", padding: "12px"}}
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        color: "#5B3C6D",
                        opacity: 1, // otherwise firefox shows a lighter color
                      },
                    },
                  }}
                ></InputBase>
                <Swiper >
                </Swiper>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default CreateDiary;
