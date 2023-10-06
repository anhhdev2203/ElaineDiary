import * as React from "react";
import recordMusic from "../img/recordMusic.png";
import { Img } from "./contentBox";
import { MusicPlayer } from "./musicPlayer";
import { Box } from "@mui/system";
export function MusicBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          height: "164px",
          margin: "50px",
          // top: "860px",
          // left: 298px
          // border-radius: 50px, 50px, 0px, 0px
          // opacity: 0.5px
        }}
      >
        <Img alt="headphone" src={recordMusic} />

        <MusicPlayer />
      </Box>
    </>
  );
}
