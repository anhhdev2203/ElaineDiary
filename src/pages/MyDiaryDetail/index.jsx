import MyDiaryBox from "./component/myDiaryBox";
import { DATASTORE } from "./data/storeDiary";

function MyDiaryDetail({ currentUser }) {
  
  return (
    <>
      <MyDiaryBox currentUser={currentUser} dataStore={DATASTORE} />
    </>
  );
}

export default MyDiaryDetail;
