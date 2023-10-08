import React, { useState } from "react";
import MyDiaryDetail from "../MyDiaryDetail/component/myDiaryBox";
import { DATAFRIEND } from "./data/storeFriData";
import { useParams } from "react-router";
function YourDiaryDetail({ currentUser, diaryList }) {
  const prams = useParams();
  const [yourdiary, setYourDianary]= useState(diaryList.filter(item => item.shareCode ==prams.sharecode)[0]);
  console.log('yourdiary', yourdiary  );
 
  console.log(prams.sharecode);
  return (
    <>
      <MyDiaryDetail currentUser={currentUser} dataStore={DATAFRIEND} />
    </>
  );
}

export default YourDiaryDetail;
