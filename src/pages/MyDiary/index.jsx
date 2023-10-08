import { Link } from "react-router-dom";
import { useState } from "react";
import { StoreBox } from "./component/storeBox";
import { Stack, Box, Typography, styled, Button } from "@mui/material";
import folderStore from "./img/folderStoreImg.png";
import { DATASTORE } from "../MyDiaryDetail/data/storeDiary.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import cameraImg from "./img/cameraImg.png";
import flowerImg from "./img/flowerImg.png";
import ButtonBox from "./component/buttonBox";
import Navigation from "./component/navigationBox";
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

function MyDiary({ currentUser, diaryList }) {
  console.log('diaryList');
  console.log(diaryList);
  console.log(currentUser);
  const value = diaryList.filter((data) => {
    if (data.userID == currentUser.userID) return data;
  });
  console.log(value);
  const [page, setPage] = useState(1);
  const handlePage = (val) => {
    setPage(val);
  };
  return (
    <>
      <Widget>
        {/* <Stack direction={"column"}> */}
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
            <Link to = "/"><ArrowBackIcon
              sx={{
                color: "#EFCC96 ",
                position: "absolute",
                left: "10px",
              }}
            />
            </Link>
            <Box
              alt="Camera"
              component="img"
              src={cameraImg}
              sx={{
                position: "absolute",
                width: " 128px",
                height: "148px",
                top: "100px",
                rotate: "28.51 deg",
                left: "2px",
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
            <StoreBox
              page={page}
              img={folderStore}
              memory={false}
              value={value}
            />
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              width: "100vw",
            }}
          >
            <ButtonBox content="Tạo nhật kí mới" />
            <Navigation page={page} setPage={handlePage} value={value} />
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

export default MyDiary;
