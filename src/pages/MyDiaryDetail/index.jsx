import { Stack, Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { DATASTORE } from "./data/storeDinary";
import { ContentBox, Img } from "./data/contentBox";
import "./myDiaryDetail.css";
import { responsiveContent } from "./data/contentBox";

import girlReads from "./img/readBook.png";

// import responsiveContent

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
      <Stack direction={"column"} sx={{ paddingTop: "111px" }}>
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
                fontFamily: "Roboto",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      ...responsiveContent,
                      fontFamily: "Dancing Script",
                      fontSize: "90px",
                      fontWeight: "400",

                      // lineHeight: "100px",
                    }}
                  >
                    {diary.author === "me"
                      ? "Nhật ký của tôi"
                      : `Nhật ký của ${diary.author}`}
                  </Typography>

                  <Typography sx={{ ...responsiveContent, fontWeight: "700" }}>
                    {diary.title}
                  </Typography>

                  <Typography
                    sx={{
                      ...responsiveContent,
                      color: "#7234C2",
                      fontWeight: "500",
                    }}
                  >
                    {diary.date}
                  </Typography>
                </Stack>
                <Stack>
                  <Img alt="girl reads book" src={girlReads} />
                </Stack>
              </Stack>

              <ContentBox title={diary.title} content={diary.content} />
            </Stack>
          ))}
      </Stack>
    </>
  );
}

export default MyDiaryDetail;
