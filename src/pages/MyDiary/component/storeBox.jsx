import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import folderStore from "../img/folderStoreImg.png";
import { Stack, Box, Typography, styled } from "@mui/material";
import Nagivation from "./navigationBox";
import ButtonBox from "../component/buttonBox";
import { display, positions } from "@mui/system";
import "../myDiary.css";
import { DATASTORE } from "../../MyDiaryDetail/data/storeDiary.jsx";
import { Link } from "react-router-dom";
import { Button } from "@mui/base";

export const Img = styled("img")({
  width: "148px",
  height: "114px",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f0f4c3",
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export function StoreBox({ page }) {
  const [value, setValue] = React.useState(DATASTORE);
  const detailRoute = (id) => {
    console.log(id);
  };
  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "Roboto",
        flexDirection: "column",
      }}
    >
      <Grid container>
        {value.map((data, index) => {
          if (index < page * 9 && index >= (page - 1) * 9) {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                // lg={3}
                xl={2}
                key={index}
                display={"grid"}
              >
                <Item onClick={() => detailRoute(data.id)}>
                  <Img sx={{}} alt="folderStore" src={folderStore} />
                  <Typography>{data.title}</Typography>
                  <Typography>{data.date}</Typography>
                </Item>
              </Grid>
            );
          }
        })}
      </Grid>
      <Box
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
      ></Box>
    </Box>
  );
}
