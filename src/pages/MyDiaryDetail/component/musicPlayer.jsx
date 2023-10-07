import * as React from "react";
import { styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import DownloadIcon from "@mui/icons-material/Download";
import RepeatIcon from "@mui/icons-material/Repeat";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const Widget = styled("div")(() => ({
  padding: "14px 72px",
  borderRadius: "50px 50px 0 0",
  width: "675px",
  maxWidth: "100%",
  //đoạn này fix sau

  position: "relative",
  marginTop: 35,
  backgroundColor: "#fff",
}));

const TinyText = styled(Typography)({
  fontSize: "0.4rem",
  opacity: 0.7,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "#000",
});

export function MusicPlayer() {
  const duration = 305; // seconds
  const [position, setPosition] = React.useState(75);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = "#8966AF";

  return (
    <Box
      sx={{
        overflow: "hidden",
        color: mainIconColor,
      }}
    >
      <Widget>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: -2,
            mb: -2,
          }}
        >
          <IconButton>
            <FastRewindRounded
              sx={{ height: "20px" }}
              fontSize="large"
              htmlColor={mainIconColor}
            />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: "2rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "2rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton>
            <FastForwardRounded
              sx={{ height: "20px" }}
              fontSize="large"
              htmlColor={mainIconColor}
            />
          </IconButton>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: mainIconColor,
            height: 3,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${mainIconColor}`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Stack
          spacing={10}
          direction="row"
          sx={{
            // mb: 1,
            px: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <DownloadIcon sx={{ height: "20px" }} />
          <RepeatIcon sx={{ height: "20px" }} />
          <ShuffleIcon sx={{ height: "20px" }} />
          <FormatListBulletedIcon sx={{ height: "20px" }} />
        </Stack>
      </Widget>
    </Box>
  );
}
