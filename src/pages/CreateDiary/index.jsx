import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Box } from '@mui/system';
import Header from '../Header';
import arrowback from '../../assets/image/arrowBacck.svg'
import heart from '../../assets/image/iconHeart.svg'
import headphone from '../../assets/image/headphone.png'
import input from '../../assets/image/RectangleDiary.png'
import imgAdd from '../../assets/image/imgImport.png'
import musicAdd from '../../assets/image/musicImport.png'
import addBtn from '../../assets/image/addBtn.png'
import imgAddBtn from '../../assets/image/addImgBtn.png'
import musicAddBtn from '../../assets/image/musicAddBtn.png'    
import binderNote from '../../assets/image/binderNote.png'
import verysad from '../../assets/image/verysad.png'
import sad from '../../assets/image/sad.png'
import normal from '../../assets/image/normal.png'
import happy from '../../assets/image/happy.png'
import veryhappy from '../../assets/image/veryhappy.png'
import saveBtn from '../../assets/image/savingBtn.png'


import { Button, Divider, TextField, Typography } from '@mui/material';

function CreateDiary() {
  return (
    <div>

      <Stack
        direction="column"
        spacing={1}
        height="100vh"
        width="100%"
        sx={{
          backgroundColor: "#FDFFFA",
        }}
      >
        <Stack
          direction="row"
          sx={{
            height: "20%"
          }}
        >
          <Box
            component="img"
            src={arrowback}
            sx={{
              width: 20,
              marginLeft: 4,
              marginTop: 6
            }}
          />
          <Button variant="contained"
            sx={{
              margin: "70px",
              width: "30",
              height: 28,
              marginTop: 8,
              borderRadius: 24,
              backgroundColor: "#BFACC8",
              boxShadow: "none",
              '&:hover': {
                margin: "70px",
                width: "30",
                height: 28,
                marginTop: 8,
                borderRadius: 24,
                backgroundColor: "#BFACC8",
                boxShadow: "none"
              }
            }} >
            <Typography
              fontFamily="Roboto"
              textTransform="none">
              Tạo mã chia sẻ
            </Typography>
          </Button>
          <Stack direction="column"
            sx={{
              marginTop: 4,
              marginLeft: 8
            }}
          >
            <Typography
              sx={{
                fontFamily: "Dancing Script",
                fontSize: "56px",
                color: "rgba(114, 80, 185, 0.92)"
              }}
            >Viết nhật kí mới</Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: 10,
                  textAlign: "center"
                }}
              >
                Viết trang nhật kí mới nào
              </Typography>
            </Box>

          </Stack>
          <Box
            component="img"
            src={heart}
            alt="Heart"
            sx={{
              width: "150px",
              height: "150px",
              padding: "71px 106px 54px 0"
            }}
          />
          <Stack
            direction="column"
          >
            <Box
              component="img"
              src={headphone}
              alt="Headphone"
              sx={{
                padding: "64px 144px 0px 0px",
                width: "200px",
                height: "130px",
              }}
            />

            <Box>
              <Typography
                sx={{
                  color: "#5B3C6D",
                  marginTop: "8px",
                  fontWeight: "600",
                  fontSize: "14px"
                }}
              >Ngày 24/01/2032</Typography>
            </Box>

          </Stack>

        </Stack>
        <Box
          sx={{
            width: "550px",
            height: "50vh",
            margin: "36px 0 0 292px !important",
            backgroundColor: "#E3DDE5",
            borderRadius: "20px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
            padding: "12px",
            paddingTop: "0px"
          }}
        >
          <TextField id="standard-basic" label="Tiêu đề nhật kí" variant="standard" 
          InputProps={{
            style: { border: 'none' }, // Remove border on focus
          }}
          
          />
          
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            sx={{
              fontSize:"12px"
            }}
          />

        </Box>
        <Stack direction="row">
            <Stack direction="column" 
            >
              <Box component="img" src={imgAdd} alt=""/>
              <Box component="img" src={imgAddBtn} alt=""/>
            </Stack>
            <Stack direction="column" 
            >
              <Box component="img" src={musicAdd} alt=""/>
              <Box component="img" src={musicAddBtn} alt=""/>

            </Stack>
            <Box component="img" src={verysad} alt=""/>
            <Box component="img" src={sad} alt=""/>
            <Box component="img" src={normal} alt=""/>
            <Box component="img" src={happy} alt=""/>
            <Box component="img" src={veryhappy} alt=""/>
            <Box component="img" src={saveBtn} alt=""/>



            
        </Stack>

      </Stack>
    </div>
  )
}

export default CreateDiary