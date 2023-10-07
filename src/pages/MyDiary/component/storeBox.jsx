import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import folderStore from "../img/folderStoreImg.png";
import { Stack, Box, Typography, styled } from "@mui/material";
import Nagivation from "./nagivationBox";
import ButtonBox from "../component/buttonBox";
import { display, positions } from "@mui/system";
import "../myDiary.css";
import { DATASTORE } from "../../MyDiaryDetail/data/storeDinary";
import { Link } from "react-router-dom";

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

const handleClick = () => {};
function FormRow({ value }) {
  return (
    <>
      {/* <Link to={"1"}>
        <button>1</button>
      </Link> */}
      <Grid item xs={3}>
        <Item>
          <Img alt="folderStore" src={folderStore} onClick={handleClick} />
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
    </>
  );
}
export function StoreBox() {
  // const [dinaryList, setDinaryList] = useState(DATASTORE);
  const [value, setValue] = React.useState(DATASTORE);

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
        <ButtonBox content="Tạo nhật kí mới" />
        <Nagivation />
      </Box>
    </Box>
  );
}
