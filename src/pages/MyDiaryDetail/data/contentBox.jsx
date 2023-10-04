import {
  Box,
  ListItemText,
  Divider,
  Typography,
  Grid,
  ButtonBase,
  styled,
} from "@mui/material";
import "../img/cover.png";
import coverImage from "../img/cover.png";

const Img = styled("img")({
  // height: "100%",
  // width: "50%",
});
export const ContentBox = ({ title, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "80%",
        minWidth: "300px",
        // minHeight: "480px",
        boxShadow: "12px 12px 0px 0px  #30173F",
        backgroundColor: "#C2BCC5",
        padding: 3,
        borderRadius: "24px",
        margin: "auto",
      }}
    >
      <ButtonBase
        sx={{
          marginBottom: { xs: 2, md: 0 },
          marginRight: { xs: 0, md: 2 },
          height: "100%",
        }}
      >
        <Img alt="cover" src={coverImage} />
      </ButtonBase>

      <Box variant="h5" sx={{ flexDirection: "column", md: "row", mb: 1 }}>
        <ListItemText primary={title} />
        <Divider />
        <Grid>
          <Typography>{content}</Typography>
        </Grid>
      </Box>
    </Box>
  );
};
