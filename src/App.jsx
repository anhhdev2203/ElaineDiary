import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import Login from "./pages/Login";
import MyDiary from "./pages/MyDiary";
import MyDiaryDetail from "./pages/MyDiaryDetail";
import CreateDiary from "./pages/CreateDiary";
import Chart from "./pages/Chart";
import YourDiaryDetail from "./pages/YourDiaryDetail";
import Register from "./pages/Register";
import MemorableDiary from "./pages/MemorableDiary";
import EditInfo from "./pages/EditInfo";
import Header from "./pages/Header";
import { ACCOUNT_DATA } from "./data/USERS_DATA";
import { THONG_KE } from "./data/THONG_KE";

function App() {
  const location = useLocation();
  // const [number, setNumber] = useState(10)
  // console.log(number);
  const [accountList, setAccountList] = useState(ACCOUNT_DATA);
  const [currentUser, setCurrentUser] = useState();
  const [staticals, setStaticals] = useState({
    labels: THONG_KE.map((data) => data.date),
    datasets: [
      {
        label: "Emotion",
        data: THONG_KE.map((data) => data.emotion),
      },
    ],
  });

  console.log(currentUser);
  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <Header></Header>
      )}
      <Routes>
        <Route
          path="/"
          element={<Home currentUser={currentUser}></Home>}
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              accountList={accountList}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></Login>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Register
              setAccountList={setAccountList}
              accountList={accountList}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></Register>
          }
        ></Route>
        <Route
          path="/mydiary"
          element={<MyDiary currentUser={currentUser}></MyDiary>}
        ></Route>
        <Route
          path="/mydiary/:id"
          element={<MyDiaryDetail currentUser={currentUser}></MyDiaryDetail>}
        ></Route>
        <Route
          path="/creatediary"
          element={<CreateDiary currentUser={currentUser}></CreateDiary>}
        ></Route>
        <Route
          path="/chart"
          element={<Chart currentUser={currentUser}></Chart>}
        ></Route>
        <Route
          path="/yourdiary"
          element={
            <YourDiaryDetail currentUser={currentUser}></YourDiaryDetail>
          }
        ></Route>

        <Route
          path="/memorablediary"
          element={<MemorableDiary currentUser={currentUser}></MemorableDiary>}
        ></Route>
        <Route
          path="/editinfo"
          element={<EditInfo currentUser={currentUser}></EditInfo>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
