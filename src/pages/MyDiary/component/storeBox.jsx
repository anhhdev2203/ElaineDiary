import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Box, Typography, styled } from "@mui/material";
import Nagivation from "./navigationBox";
import ButtonBox from "../component/buttonBox";
import { display, positions } from "@mui/system";
import "../myDiary.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/base";
import moment from "moment/moment";
import { DIARY_DATA } from "../../../data/DIARY_DAT";
import { useState } from "react";
// import {moment} from "momentjs"

export const Img = styled("img")({
  position: "sticky",
  zIndex: "1",
  width: "128px",
  height: "90px",
});

const Item = styled(Paper)(({ theme, color }) => ({
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  backgroundColor: "#fff0",
}));

export function StoreBox({ page, img, memory, value }) {
  const [listData, setListData] =useState(value);
  // const list = (value, memory) => {
  //   memory === true ? value.filter((data) => data.isMemory === true) : value;
  // };'
console.log('value');
console.log(value);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          fontFamily: "Roboto",
          flexDirection: "column",
        }}
      >
        <Grid container>
          {value.map((data, index) => {
            if (
              index < page * 9 &&
              index >= (page - 1) * 9 
            ) {
              return (
                <Grid
                  item
                  xs={12}
                  key={index}
                  display={"grid"}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                >
                  <Link to={`/mydiary/${data.id}`}>
                    <Item>
                      <Img alt="folderStore" src={img} />
                      <Typography>{data.title}</Typography>
                      <Typography>{moment(data.date).subtract(10, 'days').calendar()}</Typography>
                    </Item>
                  </Link>
                </Grid>
              );
            }
          })}
        </Grid>
        <Box
          sx={{ display: "flex", alignItems: "center", position: "relative" }}
        ></Box>
      </Box>
    </>
  );
}
