import { Box, ListItemText, Divider, Typography } from "@mui/material";

export const ContentBox = ({ title, content }) => {
  return (
    <Box
      sx={{
        minWidth: "70%",
        minHeight: "480px",
        backgroundColor: "#846C94",
        padding: 3,
        borderRadius: "24px",
      }}
    >
      <ListItemText primary={title} />
      <Divider />

      <Typography>{content}</Typography>
    </Box>
  );
};
