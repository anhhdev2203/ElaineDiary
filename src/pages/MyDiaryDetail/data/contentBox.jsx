import { Box, ListItemText, Divider } from "@mui/material";

export const ContentBox = () => {
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
      <ListItemText primary="Tiêu đề nhật ký" />

      <Divider />
    </Box>
  );
};
