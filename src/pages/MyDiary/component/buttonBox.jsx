import { Button } from "@mui/material";
import { Box } from "@mui/system";
export default function ButtonBox({ content }) {
  return (
    <>
      <Box
        sx={{
          ":hover": {
            boxShadow: 6,
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "max-content",
            backgroundColor: " #EDD0DA !important",
            textTransform: "none !important",
            color: "#000 !important",
            borderRadius: "24px !important",
            border: "1px solid #000",
            ml: "20px",
            ":hover": {
              // boxShadow: 6,
            },
          }}
        >
          {content}
        </Button>
      </Box>
    </>
  );
}
