import { Link } from "react-router-dom";
import { StoreBox } from "./box/storeBox";
import { Stack, Box, Typography, styled } from "@mui/material";

function mydiary() {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          paddingTop: "111px",
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Roboto",
          flexDirection: "column",
        }}
      >
        <StoreBox />
      </Stack>
    </>
  );
}

export default mydiary;
