import {
  Box,
  Divider,
  Typography,
  styled,
  Container,
  TextField,
} from "@mui/material";
import "../img/cover.png";
import Happy from "../img/HAPPY.png";
import Great from "../img/Great.png";
import Normal from "../img/normal.png";
import Sad from "../img/sad.png";
import VerySad from "../img/verysad.png";

import Grid from "@mui/material/Unstable_Grid2";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, flexbox } from "@mui/system";
import cover from "../img/cover.png";
import "./Scrollbar.css";

export const Img = styled("img")({
  // height: "100%",
  // width: "50%",
  // position: "absolute",
  top: 0,
  left: 0,
});
const feelImg = (feel) => {
  switch (feel) {
    case "happy":
      return Happy;
    case "great":
      return Great;
    case "normal":
      return Normal;
    case "sad":
      return Sad;
    default:
      return VerySad;
  }
};

export const responsiveContent = {
  "@media (max-width: 320px)": {
    fontSize: "0rem",
  },
  "@media (min-width: 320px) and (max-width: 992px)": {
    fontSize: "0.5rem",
  },
  // "@media (min-width: 768px) and (max-width: 992px)": {
  //   fontSize: "0.5rem",
  // },
  "@media (min-width: 992px) and(max-width: 1800px)": {
    fontSize: "1rem",
  },
  "@media (min-width: 1800px)and (max-width: 2800px)": {
    fontSize: "1.5rem",
  },
  "@media (min-width: 2800px)": {
    fontSize: "3rem",
  },
};

export const ContentBox = ({ title, content, feel }) => {
  return (
    <Box
      sx={{
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3DDE5",
        boxShadow: "12px 12px 0px 0px #C2BCC5",
        border: "1px solid #30173F",
        borderRadius: "24px",
      }}
    >
      <Stack direction="column" height="90%">
        <Box
          sx={{
            height: "10%",
            width: "780px",
          }}
        >
          <Typography
            style={{
              color: "#5B3C6D",
              marginTop: "2px",
              marginLeft: "12px",
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Divider sx={{ border: "0.5 solid #30173F", mb: "5px" }} />
        <Stack direction="row">
          <Box
            component="img"
            src={cover}
            alt="Cover"
            sx={{
              width: "25px",
              height: "150px",
            }}
          ></Box>
          <Stack
            className="content"
            direction="row"
            sx={{
              height: "150px",
              width: "700px",
              marginLeft: "30px",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                // overflow: "none",
                // ...responsiveContent,
              }}
            >
              {content}
            </Typography>

            <Box sx={{ position: "sticky", top: "100px" }}>
              {" "}
              <Box
                component="img"
                src={feelImg(feel)}
                sx={{
                  width: "75px",
                  height: "75px",
                  // marginTop: "100px",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
