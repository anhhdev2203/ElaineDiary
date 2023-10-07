import * as React from "react";
import recordMusic from "../img/recordMusic.png";
import { MusicPlayer } from "./musicPlayer";
import { Box, Stack } from "@mui/system";
import "./scrollBar.css";
export function MusicBox() {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={recordMusic}
          alt="Headphone"
          className="headphone"
          sx={{}}
        ></Box>

        <Box>
          <MusicPlayer />
        </Box>
      </Stack>
    </>
  );
}
