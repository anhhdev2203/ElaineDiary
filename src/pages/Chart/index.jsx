import { Stack, Box } from "@mui/system";
import React from "react";
import back from "../../assets/image/BackChart.png";
import { Typography } from "@mui/material";
// import { Line } from "react-chartjs-2"
// import {Chart as charJS} from "chart.js/auto"

function Chart({ currentUser, staticals }) {
  return (
    <div>
      <Stack
        direction="column"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#E6F6CB",
        }}
      >
        <Stack
          direction="row"
          spacing={50}
          sx={{
            marginTop: "70px",
          }}
        >
          <Box
            component="img"
            src={back}
            alt="BackBtn"
            sx={{
              width: "29px",
              height: "21px",
              marginLeft: "32px !important",
            }}
          />
          <Box
            sx={{
              width: "90wh",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Dancing Script",
                color: "#52895B",
                fontSize: "66px",
              }}
            >
              Thống kê
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "295px",
            width: "600px ",
            marginLeft: "275px",
            borderRadius: "12px",
          }}
        >
          <Line data={staticals} />
        </Box>
        <Box
          sx={{
            marginLeft: "500px",
            marginTop: "24px",
          }}
        >
          <Typography>Biểu đồ cảm xúc của bạn</Typography>
        </Box>
      </Stack>
    </div>
  );
}

export default Chart;
