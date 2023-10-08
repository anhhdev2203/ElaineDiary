import React from "react";
import MyDiaryDetail from "../MyDiaryDetail/component/myDiaryBox";
import { DATAFRIEND } from "./data/storeFriData";
function YourDiaryDetail({ currentUser }) {
  return (
    <>
      <MyDiaryDetail currentUser={currentUser} dataStore={DATAFRIEND} />
    </>
  );
}

export default YourDiaryDetail;
