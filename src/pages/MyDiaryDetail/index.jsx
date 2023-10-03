import { Stack } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { DATASTORE } from "./data/storeDinary";
import { ContentBox } from "./data/contentBox";

function MyDinaryDetail() {
  const { id } = useParams();
  // happy: rất vui, great: vui, normal: bình thường, sad: buồn, upset: rất buồn
  const [dinaryList, setDinaryList] = useState(DATASTORE);
  const feelColor = (feel) => {
    switch (feel) {
      case "happy":
        return "#e1bee7";
      case "great":
        return "#f48fb1";
      case "normal":
        return "#e57373";
      case "sad":
        return "#1976d2";
      default:
        return "#4a148c";
    }
  };

  return (
    <>
      <Stack direction={"column"}>
        {dinaryList
          .filter((dinary) => dinary.id === id)
          .map((dinary, key) => (
            <Stack
              key={key}
              sx={{
                backgroundColor: feelColor(dinary.color),
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {dinary.date}

              <ContentBox sx={{ position: "absolute" }} />
            </Stack>
          ))}
      </Stack>
    </>
  );
}

export default MyDinaryDetail;
