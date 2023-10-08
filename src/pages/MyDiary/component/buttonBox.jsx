import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function ButtonBox({ content }) {
  return (
    <>
      <Box
        sx={{
          zIndex: "1",
        }}
      >
        <Link to="/creatediary" style={{ textDecoration: "none" }}>
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
            }}
          >
            {content}
          </Button>
        </Link>
      </Box>
    </>
  );
}
