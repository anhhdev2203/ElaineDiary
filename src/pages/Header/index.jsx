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
import logo from "../../assets/image/logouser.png"
import arrowDown from "../../assets/image/arrowDown.png";
import people from "../../assets/image/logochandung.png";

import triangle from "../../assets/image/logotamgiac.png";
import { Link } from "react-router-dom";
const Con = styled(Container)({
  maxWidth: "1440px",
  width: "100%",
  zIndex: 2
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
              <Link to="/" >
              <img
                src={elaine}
                alt="Elaine"
                style={{
                  width: "20%",
                  

                }}
              />
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "end",
                  fontFamily: "Inter",
                  fontSize:"16px",
                  
                }}
              >
                An Hoang
              </Typography>
              {/* <img
                style={{ width: " 124px", height: "64px" }}
                src={people}
              ></img> */}
              {/* <PersonOutlineOutlinedIcon
                sx={{ width: "124px", height: "64px" }}
              ></PersonOutlineOutlinedIcon> */}
              
              <Box
                component="img"
                src={logo}
                alt="Logo Username"
                sx={{
                  width:"6%",
                  marginLeft:-1,
                  marginRight:-1.5
                }}
              ></Box>
              {/* <ArrowDropDownIcon
                sx={{ width: "124px", height: "64px" }}
              ></ArrowDropDownIcon> */}
              <Box
                component="img"
                src={arrowDown}
                alt="Arrow Down"
                sx={{
                  marginRight:3,
                  width:"4%"
                }}
              ></Box>
            </Toolbar>
          </AppBar>
        </Con>
      </Box>
    </>
  );
}

export default Header;
