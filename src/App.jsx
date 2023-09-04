import Routing from "./routes"
import React, {useContext, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {useEffect} from 'react'
import { Context } from "./context/StateContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SignIn, SignUp, PassChange, PassReset } from "./pages";
import Modal from "./components/modal";

const App = () => {
  const {showModal} = useContext(Context)
  const token = localStorage.getItem("token")

  return (
      <BrowserRouter>
        {showModal && <Modal/>}
        {/* <div id="background" className="absolute w-full h-full top-0 bg-red-600 bg-opacity-70"></div> */}
        <Routes>
          <Route path='/login' element={token ? <Navigate to={"/"}/> :<SignIn/>}/>
          <Route path='/register' element={token ? <Navigate to={"/"}/> : <SignUp/>} />
          <Route path='/forgot-password/*' element={
            <Routes>
              <Route path="/" element={token ? <Navigate to={"/"}/> :<PassReset/>}/>
              <Route path="/reset" element={token ? <Navigate to={"/"}/> : <PassChange/>}/>
            </Routes>} />
          <Route path='/*' element={
          <Routing/>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
