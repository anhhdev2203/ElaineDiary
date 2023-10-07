import { Button } from "@mui/material";
import { Box } from "@mui/system";
export default function ButtonBox({ content }, { color }) {
  return (
    <>
      <Box>
        <Button
          variant="contained"
          sx={{
            width: "max-content",
            backgroundColor: " #EDD0DA !important",
            boxShadow: " none !important",
            alignSelf: "center",
            textTransform: "none !important",
            color: "#000 !important",
            borderRadius: "24px !important",
            border: "1px solid #000",
            ml: "20px",
          }}
        >
          {content}
        </Button>
      </Box>
    </>
  );
}
