import {
  AppBar,
  Box,
  Container,
  Icon,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import React from "react";
import elaine from "../../assets/image/elaine.png";
const Con = styled(Container)({
  maxWidth: "1440px",
  width: "100%",
});
function Header() {
  return (
    <>
      <Box sx={{ width: "100vw", position: "fixed"}}>
        <Con maxWidth="lg">
          <AppBar
            color="transparent"
            position="static"
            sx={{ boxShadow: "none"}}
            
          >
            <Toolbar style = {{ paddingLeft: "0", paddingRight: "0"}}>
              <img
                src={elaine}
                alt="Elaine"
                style={{
                  width: "198px",
                  height: "111px",
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flex: 1, display: "flex", justifyContent: "end" }}
              >
                An Hoang
              </Typography>
              {/* <img
                style={{ width: " 124px", height: "64px" }}
                src={people}
              ></img> */}
              <PersonOutlineOutlinedIcon
                sx={{ width: "124px", height: "64px" }}
              ></PersonOutlineOutlinedIcon>
              <ArrowDropDownIcon
                sx={{ width: "124px", height: "64px" }}
              ></ArrowDropDownIcon>
            </Toolbar>
          </AppBar>
        </Con>
      </Box>
    </>
  );
}

export default Header;
