import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import folderStore from "../img/folderStoreImg.png";
import { Stack, Box, Typography, styled } from "@mui/material";
import Nagivation from "./nagivationBox";
import ButtonBox from "../component/buttonBox";
import { display, positions } from "@mui/system";
import "../myDiary.css";

export const Img = styled("img")({
  width: "150px",
});

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>
          <Img sx={{}} alt="folderStore" src={folderStore} />
          <Typography>Tiêu đề 1</Typography>
          <Typography>23/09/2923</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Img sx={{}} alt="folderStore" src={folderStore} />
          <Typography>Tiêu đề 1</Typography>
          <Typography>23/09/2923</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Img sx={{}} alt="folderStore" src={folderStore} />
          <Typography>Tiêu đề 1</Typography>
          <Typography>23/09/2923</Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}
export function StoreBox() {
  return (
    <Box
      sx={{
        fontFamily: "Roboto",
        flexDirection: "column",
      }}
    >
      <Grid container>
        <Grid container item>
          <FormRow />
        </Grid>
        <Grid container item>
          <FormRow />
        </Grid>
        <Grid container item>
          <FormRow />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <ButtonBox content="Tạo nhật kí mới" color="#EDD0DA" />
        <Nagivation />
      </Box>
    </Box>
  );
}
