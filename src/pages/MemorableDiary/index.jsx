import { Link } from "react-router-dom";
import { useState } from "react";
import { StoreBox } from "../MyDiary/component/storeBox";
import { Stack, Box, Typography, styled, Button } from "@mui/material";
import books from "./img/teaBook.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import cameraImg from "./img/camImg.png";
import flowerImg from "./img/flowerImg.png";
import ButtonBox from "../MyDiary/component/buttonBox";
import Navigation from "../MyDiary/component/navigationBox";
import folderMemory from "./img/folderMemory.png";
const Widget = styled("div")(() => ({
  paddingTop: "  80px",
  paddingBottom: "20px",
  minWidth: "100vw",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontFamily: "Roboto",
  flexDirection: "column",
  backgroundColor: "#f0f4c3",
  boxSizing: "border-box",
  overflow: "hidden",
}));

function MemorableDiary({ currentUser }) {
  const [page, setPage] = useState(1);
  const handlePage = (val) => {
    setPage(val);
  };
  return (
    <>
      <Widget>
        <Stack direction={"column"} sx={{ width: "60%", alignItems: "center" }}>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // position: "relative",
            }}
          >
            <ArrowBackIcon
              sx={{
                color: "#EFCC96 ",
                position: "absolute",
                left: "10px",
              }}
            />
            <Box
              alt="Camera"
              component="img"
              src={cameraImg}
              sx={{
                position: "absolute",
                width: " 140px",
                height: "140px",
                top: "150px",
                rotate: "28.51 deg",
                left: "30px",
              }}
            />
            <Stack
              direction={"column"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                align="center"
                sx={{
                  color: "#E41B1B",
                  fontSize: "64px",
                  fontFamily: "Dancing Script",
                }}
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
            </Stack>
          </Stack>

          <Stack
            direction={"column"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              padding: "20px",
            }}
          >
            <StoreBox page={page} img={folderMemory} />
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              width: "100vw",
            }}
          >
            <Box
              alt="Camera"
              component="img"
              src={books}
              sx={{
                position: "absolute",
                width: " 150px",
                height: "150px",

                bottom: "-3%",
              }}
            />
            <Navigation page={page} setPage={handlePage} />
          </Stack>

          <Box
            alt="Flower"
            component="img"
            src={flowerImg}
            sx={{
              position: "fixed",
              top: "300px",
              width: " 130px",
              bottom: "-1px",
              right: "-5px",
            }}
          />
        </Stack>
      </Widget>
    </>
  );
}

export default MemorableDiary;
