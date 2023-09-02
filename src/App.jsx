import Routing from "./routes"
import React, {useContext, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {useEffect} from 'react'
import { Context } from "./context/StateContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SignIn, SignUp, PassChange, PassReset } from "./pages";
import Modal from "./components/modal/Modal";

const App = () => {
  const {showModal, globalTarget, setGlobalTarget} = useContext(Context)
  const token = localStorage.getItem("token")

  return (
      <BrowserRouter>
        {showModal && <Modal/>}
        {/* <div id="background" className="absolute w-full h-full top-0 bg-red-600 bg-opacity-70"></div> */}
        <Routes>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/register' element={<SignUp/>} />
          <Route path='/forgot-password/*' element={
            <Routes>
              <Route path="/" element={<PassReset/>}/>
              <Route path="/reset/:token" element={<PassChange/>}/>
            </Routes>} />
          <Route path='/*' element={
          <Routing/>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
