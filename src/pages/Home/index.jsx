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

const Title = styled(Typography)({
  color: "#D069B3",
  fontFamily: " Dancing Script",
  fontSize: "90px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  textAlign: "center",
  paddingBottom: "36px"
});

const Text = styled(Typography)({
  color: "#000",
  fontSize: "36px",
  fontStyle: "normal",
  fontweight: 300,
  lineHeight: "normal",
  padding: "50px",
  width: "700px",
  display: "flex",
  alignSelf: "center",
  textAlign: "center",
});
const ButtonItem = styled(Button)({
  borderRadius: "50px",
  backgroundColor: "#EFB49599",
  width: "300px",
  height: "42px",
  display: "flex",
  alignSelf: "center",
  marginBottom: "16px",
  marginTop: "16px",
});
const CardItem = styled(Card)({
  width: "380px",
  height : "250px",
  backgroundColor: "#E6F6CB",
  borderRadius: "25.967px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
const ButtonText = styled(Typography)({
  color: "#79AC78",
  formFamily: "Roboto",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  borderRadius: "8px",
});
function Home({currentUser}) {
  console.log(currentUser);
  if (currentUser) {
    // Đây là ví dụ, bạn có thể làm gì đó với currentUser tại đây
    console.log(`Xin chào, ${currentUser.userID}!`);
  } else {
    console.log("currentUser là null hoặc undefined");
  }

  return (
    <>
      <Box
      sx={{
        // width: "100vw",
        //height: "100vw",
        background: "#F5CFCF",
        paddingTop: "90px",
        paddingBottom: "50px"
      }}
    >
      <Container maxWidth="xl">
        <Title>Trang chủ</Title>
        <Stack display="flex "
            flexDirection="column"
            //gap="55px"
            justifyContent="space-around"
            marginLeft="95px"
            marginRight="95px">
          <Stack
            display="flex "
            flexDirection="row"
            gap="55px"
            justifyContent="center"
          >
            <CardItem >
              <CardMedia sx ={{height: "70%"}}component="img" image={taonhatki} />
              <ButtonItem>
                <ButtonText>Tạo nhật kí</ButtonText>
              </ButtonItem>
            </CardItem>
            <CardItem>
              <CardMedia
                sx ={{height: "70%"}}
                component="img"
                image={luutru}
              />
              <ButtonItem>
                <ButtonText>Lưu trữ</ButtonText>
              </ButtonItem>
            </CardItem>
            <CardItem>
              <CardMedia sx ={{height: "70%"}} component="img" image={nhatkiluutru} />
              <ButtonItem>
                <ButtonText>Nhật kí đáng nhớ</ButtonText>
              </ButtonItem>
            </CardItem>
          </Stack>

          <Text>
            “Cuộc sống xô bồ cũng đừng quên dành thời gian cho bản thân nhé!”
          </Text>

          <Stack
            display="flex "
            flexDirection="row"
            gap="55px"
            justifyContent="center"
          >
            <CardItem>
              <CardMedia  sx ={{height: "70%"}}component="img" image={traodoinhatki} />
              <ButtonItem>
                <ButtonText>Trao đổi nhật kí</ButtonText>
              </ButtonItem>
            </CardItem>

            <CardItem>
              <CardMedia sx ={{height: "70%"}} component="img" image={thongke} />
              <ButtonItem>
                <ButtonText>Thống kê</ButtonText>
              </ButtonItem>
            </CardItem>
          </Stack>
        </Stack>
      </Container>
    </Box>
    </>
  );
}

export default Home;
