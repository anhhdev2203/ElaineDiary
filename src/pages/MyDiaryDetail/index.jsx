import MyDiaryBox from "./component/myDiaryBox";
import { DATASTORE } from "./data/storeDiary";

function MyDiaryDetail({ currentUser, diaryList }) {
  
  return (
    <>
      <MyDiaryBox currentUser={currentUser} diaryList={diaryList} />
    </>
  );
}

export default MyDiaryDetail;
