import {
  Box,
  ListItemText,
  Divider,
  Typography,
  Grid,
  ButtonBase,
  styled,
  Container,
} from "@mui/material";
import "../img/cover.png";
import coverImage from "../img/cover.png";

const Img = styled("img")({
  height: "100%",
  // width: "50%",
  position: "absolute",
  top: 0,
  left: 0,
});
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

        // transform: "scale(1)",
        // transition: "transform 0.3s ease-in-out",
        // "&:hover": {
        //   transform: "scale(1.1)",
        // },
      }}
    >
      <Box variant="h5" sx={{ direction: "row" }}>
        <Container>
          <ListItemText variant="h5" sx={{ mb: 1 }} primary={title} />
        </Container>
        <Divider />

        {/* <Container sx={{ position: "relative" }}> */}
        <ButtonBase>
          <Img alt="cover" src={coverImage} />
          <Typography
            sx={{
              // marginLeft: "3%",
              textAlign: "left",
            }}
          >
            {content}
          </Typography>
        </ButtonBase>
        {/* </Container> */}
      </Box>
    </Box>
  );
};
