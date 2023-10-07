import { Link } from "react-router-dom";
import { StoreBox } from "./component/storeBox";
import { Stack, Box, Typography, styled, Button } from "@mui/material";
import arrowBack from "../MyDiaryDetail/img/arrowBack.svg";
import cameraImg from "./img/cameraImg.png";
import flowerImg from "./img/flowerImg.png";
function mydiary() {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          paddingTop: "  80px;",
          // minWidth: "100vw",
          minHeight: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Roboto",
          flexDirection: "column",
          backgroundColor: "#FFF9BF",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <Stack>
            <Box
              component="img"
              src={arrowBack}
              alt="ArrowBack"
              sx={{
                width: "2%",
                position: "absolute",
                // top: "72px",
                left: "24px",
              }}
            />
            <Typography
              component="h1"
              variant="h6"
              align="center"
              sx={{
                color: "#E41B1B",

                fontSize: "46px",
                fontFamily: "Dancing Script",
              }}
              // sx={{
              //   fontSize: "46px",
              //   fontFamily: "Dancing Script",
              //   "@media (max-width: 320px)": {
              //     fontSize: "100px",
              //   },
              //   "@media (min-width: 320px) and (max-width: 992px)": {
              //     fontSize: "60px",
              //   },
              //   "@media (min-width: 992px) and(max-width: 1800px)": {
              //     fontSize: "100px",
              //   },

              //   "@media (min-width: 1800px)and (max-width: 2600px)": {
              //     fontSize: "100px",
              //   },
              //   "@media (min-width: 2600px)": {
              //     fontSize: "150px",
              //   },
              // }}
            >
              Kho lưu trữ
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                color: "#EB5050C4",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                fontSize: "12px",
                lineHeight: "24px",
              }}
            >
              Cùng xem lại Nhật Kí của bạn nào!!!
            </Typography>
            <Box
              alt="Camera"
              component="img"
              src={cameraImg}
              sx={{
                position: "absolute",
                top: "-80px",
                // left: "24px",
                width: " 200px",
                // height: " 234.78px",
                left: "20px",
                angle: "28.51 deg",
              }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <StoreBox />
          <Box
            alt="Flower"
            component="img"
            src={flowerImg}
            sx={{
              // width: "2",
              position: "absolute",
              // top: "72px",
              // left: "24px",
              width: " 200px",
              bottom: "-1px",
              right: "-5px",
              angle: "28.51 deg",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default mydiary;
