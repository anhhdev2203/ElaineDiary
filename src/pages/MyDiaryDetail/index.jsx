import { Stack, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { DATASTORE } from "./data/storeDinary";
import { ContentBox } from "./data/contentBox";
import "./myDiary.css";
function MyDiaryDetail() {
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
          .filter((diary) => diary.id === id)
          .map((diary, key) => (
            <Stack
              key={key}
              sx={{
                backgroundColor: feelColor(diary.color),
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Dancing Script",
                    fontSize: "80px",
                    lineHeight: "100px",
                  }}
                >
                  Nhật ký của tôi
                </Typography>
                <Typography> {diary.title}</Typography>
                <Typography>{diary.date}</Typography>
              </Stack>
              <ContentBox
                title={diary.title}
                content={diary.content}
                sx={{ position: "absolute" }}
              />
            </Stack>
          ))}
      </Stack>
    </>
  );
}

export default MyDiaryDetail;
