import { Box, Divider, Typography, styled, Container } from "@mui/material";
import "../img/cover.png";
import coverImage from "../img/cover.png";
import feelImage from "../img/HAPPY.png";
import Grid from "@mui/material/Unstable_Grid2";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
        border: "#30173F solid 1px",
        alignItems: "center",
        boxShadow: "12px 12px 0px 0px  #30173F",
        backgroundColor: "#ececec",
        borderRadius: "54px",
        ...responsiveBOX,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // transform: "scale(1)",
        // transition: "transform 0.3s ease-in-out",
        // "&:hover": {
        //   transform: "scale(1.1)",
        // },
      }}
    >
      <Box
        sx={{
          direction: "row",
        }}
      >
        <Container
          variant="h5"
          sx={{
            fontFamily: "Roboto",
            fontSize: "24px",
            lineHeight: "28px",
            fontWeight: "600",
            ...responsiveContent,
            pt: 4,
            pb: 4,
            ml: 4,
            color: "#5B3C6D",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {title}
        </Container>
        <Divider sx={{ border: "#30173F solid 1px " }} />
        <Grid2 container spacing={0.5} minHeight={160}>
          <Img alt="cover" src={coverImage} />
          <Grid
            responsiveBOX
            xs
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            padding="2%"
            sx={{
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                ...responsiveContent,
                textAlign: " justify",
                fontFamily: "Roboto",
              }}
            >
              {content}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "flex-end",
              right: "0",
            }}
          >
            <Img alt="fell" src={feelImage} />
          </Grid>
        </Grid2>
      </Box>
    </Box>
  );
};
