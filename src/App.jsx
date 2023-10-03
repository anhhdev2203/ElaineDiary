import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router'
import Login from './pages/Login'
import MyDiary from './pages/MyDiary'
import MyDiaryDetail from './pages/MyDiaryDetail'
import CreateDiary from './pages/CreateDiary'
import Chart from './pages/Chart'
import YourDiaryDetail from './pages/YourDiaryDetail'
import Register from './pages/Register'
import MemorableDiary from './pages/MemorableDiary'
import EditInfo from './pages/EditInfo'
import Header from './pages/Header'
function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === "/login" || location.pathname === "/register"
        ? null
        : <Header></Header>
      }
      <Routes>
          <Route path ="/" element ={<Home></Home>}></Route>
          <Route path = "/login" element = {<Login></Login>}></Route>
          <Route path='/register' element ={<Register></Register>}></Route>
          <Route path ="/mydiary" element ={<MyDiary></MyDiary>}></Route>
          <Route path ="/mydiary/:id" element ={<MyDiaryDetail></MyDiaryDetail>}></Route>
          <Route path ="/creatediary" element = {<CreateDiary></CreateDiary>}></Route>
          <Route path="/chart" element ={<Chart></Chart>}></Route>
          <Route path ="/yourdiary" element = {<YourDiaryDetail></YourDiaryDetail>}></Route>
          <Route path ="/memorablediary" element={<MemorableDiary></MemorableDiary>}></Route>
          <Route path='/editinfo' element = {<EditInfo></EditInfo>}></Route>
      </Routes>
    </>

  )
}

export default App