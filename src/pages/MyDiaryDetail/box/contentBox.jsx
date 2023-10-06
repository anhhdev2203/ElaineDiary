import { Box, Divider, Typography, styled, Container, TextField } from "@mui/material";
import "../img/cover.png";
import feelImage from "../img/HAPPY.png";
import Grid from "@mui/material/Unstable_Grid2";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, flexbox } from "@mui/system";
import cover from "../img/cover.png"
import './Scrollbar.css'

export const Img = styled("img")({
  // height: "100%",
  // width: "50%",
  // position: "absolute",
  top: 0,
  left: 0,
});
const responsiveBOX = {
  width: "80%",
  height: "480px",

  "@media (max-width: 320px)": {
    height: "480px",
    top: "150px",
    left: "190px",
  },
  "@media (min-width: 320px) and (max-width: 768px)": {
    height: "300px",

    top: "150px",
    left: "190px",
  },
  "@media (min-width: 768px) and (max-width: 992px)": {
    height: "300px",
  },
  "@media (min-width: 992px) and(max-width: 1500px)": {
    height: "300px",
  },
  "@media (min-width: 1500px) and(max-width: 1800px)": {
    height: "200px",
  },
  "@media (min-width: 1800px)and (max-width: 2600px)": {
    height: "450px",
  },
  "@media (min-width: 2600px)and (max-width: 2800px)": {
    height: "600px",
    // top: "150px",
    // left: "190px",
  },
  "@media (min-width: 2800px)": {
    height: "900px",
    // top: "150px",
    // left: "190px",
  },
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

export const ContentBox = ({ title, content }) => {
  return (
    <Box
      sx={{
        width: "800px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3DDE5",
        marginTop: "28px",
        boxShadow: "12px 12px 0px 0px #C2BCC5",
        border: "1px solid #30173F",
        borderRadius: "24px",
        marginBottom:"10px",

      }}>
      <Stack direction="column" height="90%">
        <Box
          sx={{
            height: "10%",
            width: "780px",
          }}
        >
          <p
            style={{
              color: "#5B3C6D", marginTop: "2px", marginLeft: "12px",
              fontSize: "12px", fontWeight: "700", fontFamily: "Roboto"
            }}
          >{title}</p>
        </Box>
        <hr className="solid"
          style={{
            border: "0.5px solid #30173F",
            marginBottom: "12px"
          }}></hr>
        <Stack direction="row">
          <Box component="img" src={cover} alt="Cover"
            sx={{
              width: "25px",
              height:"150px"


            }}
          ></Box>
          <Stack className="content" direction="row" sx={{
            height: "150px",
            width: "700px",
            marginLeft: "30px",
            overflow: "auto"

          }}>
            <p
              style={{
                fontSize: "12px"

              }}>{content}</p>
            <Box
              component="img"
              src={feelImage}
              sx={{
                width: "75px",
                height: "75px",
                marginTop: "100px"
              }}
            ></Box>
            
          </Stack>
        </Stack>

      </Stack>




    </Box >
  );
};