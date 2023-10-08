import { Stack, Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ContentBox, Img } from "./contentBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { MusicBox } from "./musicBox";

import { responsiveContent } from "./contentBox";

import girlReads from "../img/readBook.png";
import { Link } from "react-router-dom";

function MyDiaryBox({ currentUser, dataStore }) {
  const { id } = useParams();

  // happy: rất vui, great: vui, normal: bình thường, sad: buồn, upset: rất buồn
  const [diaryList, setDinaryList] = useState(dataStore);
  const [titleHead, settitleHead] = useState("Nhật ký của tôi");

  const feelColor = (feel) => {
    switch (feel) {
      case "happy":
        return "#C5ABC6";
      case "great":
        return "#778877";
      case "normal":
        return "#C2BCC5";
      case "sad":
        return "#A3ACB1";
      default:
        return "#ABABAB";
    }
  };
  const navigate = useNavigate();
  // const responsiveBOX = {
  //   width: "80%",
  //   height: "480px",

  //   "@media (max-width: 320px)": {
  //     height: "480px",
  //     top: "150px",
  //     left: "190px",
  //   },
  //   "@media (min-width: 320px) and (max-width: 768px)": {
  //     height: "300px",

  //     top: "150px",
  //     left: "190px",
  //   },
  //   "@media (min-width: 768px) and (max-width: 992px)": {
  //     height: "300px",
  //   },
  //   "@media (min-width: 992px) and(max-width: 1500px)": {
  //     height: "300px",
  //   },
  //   "@media (min-width: 1500px) and(max-width: 1800px)": {
  //     height: "200px",
  //   },
  //   "@media  (min-width: 1800px) and (max-width: 2600px)": {
  //     height: "450px",
  //   },
  //   "@media (min-width: 2600px)and (max-width: 2800px)": {
  //     height: "600px",
  //     // top: "150px",
  //     // left: "190px",
  //   },
  //   "@media  (min-width: 2800px)": {
  //     height: "900px",
  //     // top: "150px",
  //     // left: "190px",
  //   },
  // };
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          // paddingTop: "111px"
          marginBottom: "12px!impo",
        }}
      >
        {diaryList

          .filter((diary) => diary.id === id)
          .map((diary, key) => (
            <Stack
              key={key}
              sx={{
                backgroundColor: feelColor(diary.color),
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                // justifyContent: "flex-start",
                justifyContent: "space-between;",
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
                  width: "100%",
                }}
              >
                <ArrowBackIcon
                 onClick={() => navigate(-1)}
                  sx={{
                    color: "#AE95CE",
                    width: "2%",
                    position: "absolute",
                    top: "72px",
                    left: "24px",
                  }}
                ></ArrowBackIcon>
                <Stack
                  direction="column"
                  sx={{
                    top: "32px",
                    position: "absolute",
                  }}
                >
                  <Box>
                    {diary.author != "me" ? (
                      settitleHead(`Nhật ký của ${diary.author} `)
                    ) : (
                      <></>
                    )}
                  </Box>

                  <Box>
                    <Typography
                      component="h1"
                      variant="h6"
                      align="center"
                      color="text.primary"
                      sx={{
                        fontSize: "46px",
                        fontFamily: "Dancing Script",
                        // "@media (max-width: 320px)": {
                        //   fontSize: "100px",
                        // },
                        // "@media (min-width: 320px) and (max-width: 992px)": {
                        //   fontSize: "60px",
                        // },
                        // "@media (min-width: 992px) and(max-width: 1800px)": {
                        //   fontSize: "100px",
                        // },

                        // "@media (min-width: 1800px)and (max-width: 2600px)": {
                        //   fontSize: "100px",
                        // },
                        // "@media (min-width: 2600px)": {
                        //   fontSize: "150px",
                        // },
                      }}
                    >
                      {titleHead}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        ...responsiveContent,
                        fontWeight: "700",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "12px",
                      }}
                    >
                      {diary.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        ...responsiveContent,
                        color: "#7234C2",
                        fontWeight: "500",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "8px",
                      }}
                    >
                      {diary.date}
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  sx={{
                    // "@media (max-width: 320px)": {
                    //   width: "224px",
                    //   height: "224px",
                    // },
                    // "@media (min-width: 320px) and (max-width: 992px)": {
                    //   width: "224px",
                    //   height: "224px",
                    // },
                    // "@media (min-width: 992px) and(max-width: 1500px)": {
                    //   width: "200px",
                    //   height: "200px",
                    // },
                    // "@media (min-width: 1500px)and (max-width: 1800px)": {
                    //   width: "200px",
                    //   height: "200px",
                    // },
                    // "@media (min-width: 1800px)and (max-width: 2800px)": {
                    //   width: "250px",
                    //   height: "250px",
                    // },
                    // "@media (min-width: 2800px)": {
                    //   width: "500px",
                    //   height: "500px",
                    // },
                    width: "8%",
                    position: "absolute",
                    top: "44px",
                    right: "350px",
                  }}
                  component="img"
                  alt="girl reads book"
                  src={girlReads}
                />
              </Stack>

              <Stack sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ContentBox
                  title={diary.title}
                  content={diary.content}
                  feel={diary.color}
                />

                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MusicBox />
                </Stack>
              </Stack>
            </Stack>
          ))}
      </Stack>
    </>
  );
}

export default MyDiaryBox;
