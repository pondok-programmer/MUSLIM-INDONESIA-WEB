import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import {  Home, Profile, About, Events } from "../pages"
import NotFound from "../pages/not-found/NotFound"
import { BsArrowUp, BsBell, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"
// import Navbar from "../components/Navbar"
import { useContext } from 'react'
import { Context } from "../context/StateContext"
// import Masjid from "../pages/main/Masjid"
import DetailMasjid from "../pages/details/DetailMasjid"
import Navbar from "../components/nav/Navbar"
import AdminCreate from "../pages/main/AdminCreate"
import Admin from "../pages/main/Admin"
import AdminEdit from "../pages/main/AdminEdit"

const Routing = () => {

    const {masjidSource, token} = useContext(Context)

    return (
        <>
            
            <Navbar/>
            <Routes>
                <Route path='/' element={token.toLowerCase() == "admin" ? <Admin/> : <Home/>} />
                {token.toLowerCase() == "admin" && 
                <>
                    <Route path='/create' element={<AdminCreate/>} />
                    <Route path='/edit/:id' element={<AdminEdit/>} />
                </>
                }
                <Route path='/about' element={<About/>} />
                <Route path='/event' element={<Events/>} />
                <Route path='/user/:username' element={<Profile/>} />
                <Route path='/detail/masjid' element={<DetailMasjid/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            <footer className='h-[calc(33vh-3.8rem)] flex flex-col justify-between items-center w-full bg-kryptonite'>
                <div className='w-full flex justify-center items-center from-white to-kryptonite from-[50%] to-[50%] bg-gradient-to-b'>
                <button className='bg-yellow-500 rounded-full border-kryptonite border-4 ' onClick={()=>{scrollTo(top)}}><BsArrowUp className='text-[35px] text-lime-700 p-1'/></button>
                </div>
                <div className='relative w-full flex-1'>
                <div className='absolute top-0 text-white right-8 w-auto h-auto text-center'>
                    <h2>CONTACT</h2>
                    <ul className='flex justify-center gap-3 [&_li]:text-[18px]'>
                    <li>
                        <a href=""><BsInstagram/></a>
                    </li>
                    <li>
                        <a href=""><BsWhatsapp/></a>
                    </li>
                    <li>
                        <a href=""><BsFacebook/></a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className='text-white py-2'>
                <h6 className='text-[14px]'> &copy; Copyright Muslim Indonesia 2023</h6>
                </div>
            </footer>
        </>
    )
}

export default Routing