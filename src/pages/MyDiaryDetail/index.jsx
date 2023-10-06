import { Stack, Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { DATASTORE } from "./data/storeDinary";
import { ContentBox, Img } from "./box/contentBox";
// import { MusicBox } from "./box/musicBox";
import arrowBack from "./img/arrowBack.svg"
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
      <Stack direction={"column"}
        sx={{
          // paddingTop: "111px" 
        }}>
        {dinaryList
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
                justifyContent: "center",
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
                  width: "100%"
                }}
              >
                <Box component="img" src={arrowBack} alt="ArrowBack"
                  sx={{
                    width: "2%",
                    position:"absolute",
                    top:"72px",
                    left: "24px"

                  }}></Box>
                <Stack direction="column"
                  sx={{
                    top: "32px",
                    position:"absolute"
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
                        fontSize:"12px"
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
                    position:"absolute",
                    top:"44px",
                    right:"350px"
                  }}
                  component="img"
                  alt="girl reads book"
                  src={girlReads}
                />
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
