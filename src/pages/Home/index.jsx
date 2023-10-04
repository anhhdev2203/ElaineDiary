import { DisplaySettings } from "@mui/icons-material";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import luutru from "../../assets/image/luutru1.jpg";
import nhatkiluutru from "../../assets/image/nhatkiyeuthich.jpg";
import taonhatki from "../../assets/image/taonhatki.jpg";
import thongke from "../../assets/image/thongke.jpg";
import traodoinhatki from "../../assets/image/traodoinhatki.jpg";
import { styled } from "@mui/material/styles";
const CardItem = styled (Card) ({
  width: "380px",
  //height: "216px",
  backgroundColor: "#E6F6CB",
  borderRadius: "25.967px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",

});
const buttonText = styled(Typography)({
  color:" #79AC78",
  fontFamily: "Roboto",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  padding: "8px"
});
function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vw",
        background: "#F5CFCF",
        paddingTop: "111px",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#D069B3",
            fontFamily: "Dancing Script",
            fontSize: "90px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            paddingBottom: "56px",
          }}
        >
          {" "}
          Trang chủ
        </Typography>
        <Stack>
          <Stack display="flex " flexDirection="row" gap="55px" justifyContent= "center">
            
            <CardItem
             
            >
              <CardMedia component="img" image={taonhatki}  />
              <Button sx={{
                  backgroundColor: "#EFB49599",
                  display: "flex",
                  alignSelf: "center",
                }}><buttonText>Tạo nhật kí</buttonText></Button>
            </CardItem>
            <CardItem
            >
              <CardMedia
                sx={{ MozBorderRadiusTopleft: "25.967px" }}
                component="img"
                image={luutru}
              />
              <Button sx={{
                  backgroundColor: "#EFB49599",
                  display: "flex",
                  alignSelf: "center",
                }}><buttonText>Lưu trữ</buttonText></Button>
            </CardItem>
            <CardItem
            >
              <CardMedia component="img" image={nhatkiluutru} />
              <Button
                sx={{
                  backgroundColor: "#EFB49599",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <buttonText>Nhật kí đáng nhớ</buttonText>
              </Button>
            </CardItem>
          </Stack>

          <Typography
            sx={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: "36px",
              fontStyle: "normal",
              fontweight: 300,
              lineHeight: "normal",
              padding: "50px",
              width: "600px",
              display :"flex",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            “Cuộc sống xô bồ cũng đừng quên dành thời gian cho bản thân nhé!”
          </Typography>

          <Stack display="flex " flexDirection="row" gap="55px" justifyContent="center">
            <CardItem
            >
              <CardMedia component="img" image={traodoinhatki} />
              <Button sx={{
                  backgroundColor: "#EFB49599",
                  display: "flex",
                  alignSelf: "center",
                }}><buttonText>Trao đổi nhật kí</buttonText></Button>
            </CardItem>

            <CardItem
            >
              <CardMedia component="img" image={thongke} />
              <Button sx={{
                  backgroundColor: "#EFB49599",
                  display: "flex",
                  alignSelf: "center",
                }}><buttonText>Thống kê</buttonText></Button>
            </CardItem>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
