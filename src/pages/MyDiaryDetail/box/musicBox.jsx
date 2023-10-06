import * as React from "react";
import recordMusic from "../img/recordMusic.png";
import { Img } from "./contentBox";
import { MusicPlayer } from "./musicPlayer";
import { Box, Stack } from "@mui/system";
import "./scrollBar.css"
export function MusicBox() {
  return (
    <>
      <Stack direction="row"
        sx={{
          // alignContent: "center",
          // justifyContent: "center",
          // alignItems: "center",
          width: "100%%",
          height: "50px",
          // top: "860px",
          // left: 298px
          // border-radius: 50px, 50px, 0px, 0px
          // opacity: 0.5px
        }}
      >
        <Box component="img" src={recordMusic} alt="Headphone" className="headphone"
        sx={{
          
        }}></Box>
        
        <Box
        sx={{
          width:"100%"
        }}
        >
        <MusicPlayer />
        </Box>
        
      </Stack>
    </>
  );
}
