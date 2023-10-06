import { Stack, Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { DATASTORE } from "./data/storeDinary";
import { ContentBox, Img } from "./box/contentBox";
// import { MusicBox } from "./box/musicBox";

import "./myDiaryDetail.css";
import { responsiveContent } from "./box/contentBox";

import girlReads from "./img/readBook.png";

function MyDiaryDetail() {
  const { id } = useParams();
  // happy: rất vui, great: vui, normal: bình thường, sad: buồn, upset: rất buồn
  const [dinaryList, setDinaryList] = useState(DATASTORE);
  const [titleHead, settitleHead] = useState("Nhật ký của tôi");

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
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Roboto",
                flexDirection: "column",
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
                  {diary.author != "me" ? (
                    settitleHead(`Nhật ký của ${diary.author} `)
                  ) : (
                    <></>
                  )}
                  <Typography
                    component="h1"
                    variant="h1"
                    align="center"
                    color="text.primary"
                    sx={{
                      fontSize: "80px",
                      fontFamily: "Dancing Script",
                      "@media (max-width: 320px)": {
                        fontSize: "100px",
                      },
                      "@media (min-width: 320px) and (max-width: 992px)": {
                        fontSize: "60px",
                      },
                      "@media (min-width: 992px) and(max-width: 1800px)": {
                        fontSize: "100px",
                      },

                      "@media (min-width: 1800px)and (max-width: 2600px)": {
                        fontSize: "100px",
                      },
                      "@media (min-width: 2600px)": {
                        fontSize: "150px",
                      },
                    }}
                  >
                    {titleHead}
                  </Typography>
                  <Typography
                    sx={{
                      ...responsiveContent,
                      fontWeight: "700",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {diary.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...responsiveContent,
                      color: "#7234C2",
                      fontWeight: "500",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {diary.date}
                  </Typography>
                </Stack>
                <Stack>
                  <Img
                    sx={{
                      "@media (max-width: 320px)": {
                        width: "224px",
                        height: "224px",
                      },
                      "@media (min-width: 320px) and (max-width: 992px)": {
                        width: "224px",
                        height: "224px",
                      },
                      "@media (min-width: 992px) and(max-width: 1500px)": {
                        width: "200px",
                        height: "200px",
                      },
                      "@media (min-width: 1500px)and (max-width: 1800px)": {
                        width: "200px",
                        height: "200px",
                      },
                      "@media (min-width: 1800px)and (max-width: 2800px)": {
                        width: "250px",
                        height: "250px",
                      },
                      "@media (min-width: 2800px)": {
                        width: "500px",
                        height: "500px",
                      },
                    }}
                    alt="girl reads book"
                    src={girlReads}
                  />
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentBox title={diary.title} content={diary.content} />
                {/* <MusicBox /> */}
              </Stack>
            </Stack>
          ))}
      </Stack>
    </>
  );
}

export default MyDiaryDetail;
