import {
  Box,
  ListItemText,
  Divider,
  Typography,
  styled,
  Container,
} from "@mui/material";
import "../img/cover.png";
import coverImage from "../img/cover.png";
import feelImage from "../img/HAPPY.png";
import Grid from "@mui/material/Unstable_Grid2";

const Img = styled("img")({
  // height: "100%",
  // width: "50%",
  // position: "absolute",
  // top: 0,
  // left: 0,
});
const responsiveContent = {
  "@media (max-width: 320px)": {
    //điện thoại
    fontSize: "0rem",
    backgroundColor: "#C2BCC5",
  },
  "@media (min-width: 320px,max-width: 768px)": {
    //may tinh bảng nhỏ
    fontSize: "1rem",
  },
  "@media (min-width: 768px,max-width: 992px)": {
    //may tinh bang lon
    fontSize: "1rem",
  },
  "@media (min-width: 992px,max-width: 1200px)": {
    //may tinh thong thuong
    fontSize: "1rem",
  },
  "@media (min-width: 1200px)": {
    //lap top to
    backgroundColor: "#red",

    fontSize: "2.5rem",
  },
};
export const ContentBox = ({ title, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "80%",
        minWidth: "300px",
        boxShadow: "12px 12px 0px 0px  #30173F",
        backgroundColor: "#C2BCC5",
        borderRadius: "24px",
        // border: "none",

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
        <Container>
          <ListItemText
            variant="h5"
            sx={{
              mb: 1,
            }}
            primary={title}
          />
        </Container>
        <Divider />

        <Grid
          container
          spacing={1}
          minHeight={160}
          sx={{ position: "relative" }}
        >
          <Grid
            xs
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Img alt="cover" src={coverImage} />
          </Grid>

          <Grid
            xs
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              sx={{
                ...responsiveContent,
                // marginLeft: "3%",
                textAlign: "left",
              }}
            >
              {content}
            </Typography>
          </Grid>

          <Grid xs display="flex" justifyContent="flex-end" alignItems="end">
            <Img alt="fell" src={feelImage} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
