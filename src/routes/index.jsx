import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ResetPassword, SignIn, SignUp, Home } from "../pages"
import NotFound from "../pages/not-found/NotFound"
import { BsBell } from "react-icons/bs"
// import Navbar from "../components/Navbar"
import { useContext } from 'react'
import { Context } from "../context/StateContext"
import { PiIntersectThree, PiUserCircleFill } from "react-icons/pi"
import { AiOutlineMenu } from "react-icons/ai"

const Routing = () => {

    const {masjidSource} = useContext(Context)

    return (
        <>
        {/* <Navbar/> */}
            <button className='bell fixed bottom-10 bg-white text-lime-700 right-6 rounded-full p-3 z-10'>
                <BsBell className="text-[28px]"/>
            </button>

            <nav className="sm:h-[3.7rem] w-full lg:h-16 bg-kryptonite z-10 flex justify-between sticky top-0 text-white sm:px-0.5 lg:px-4">
                <div className="h-full w-1/2 lg:pt-2 p-1">
                    <figure className='flex gap-0.5 sm:gap-1.5'>
                        <img src={masjidSource} alt="" className='h-12 max-sm:h-11'/>
                        <figcaption className='w-min leading-5 py-0.5'><span className="text-sari">Muslim</span> Indonesia</figcaption>
                    </figure>
                </div>
                <div className="flex sm:h-full lg:w-1/2 w-full lg:justify-between justify-end">
                    <ul className="h-full hidden lg:flex justify-center flex-1 [&_li]:flex-[0_18%] [&_li]:flex [&_li]:justify-center [&_li]:items-center">
                        <li className="h-full">
                        <a href="#home" className=' hover:text-sari font-bold'>HOME</a>
                        </li>
                        <li className="h-full">
                        <a href="#about" className='hover:text-sari font-bold'>ABOUT US</a>
                        </li>
                        <li className="h-full">
                        <a href="#event" className='hover:text-sari font-bold'>EVENT</a>
                        </li>
                    </ul>
                    <div className="aspect-square flex h-full">
                        <button className='flex-1 max-lg:hidden'><PiUserCircleFill className='h-full w-full text-[16px] sm:p-2.5'/></button>

                        <button className="flex-1" onClick={()=>{document.getElementById("nav-menu").classList.toggle("!h-0")}}><AiOutlineMenu className='h-full w-full text-[10px] p-4'/></button>
                    </div>
                </div>
                <div id="nav-menu" className="!h-0 w-full h-[14rem] sm:h-[16rem] absolute bottom-0 translate-y-[100%] overflow-hidden left-0 duration-500 ">
                    <ul className="h-full flex flex-col items-center bg-kryptonite [&_a]:justify-center [&_a]:flex [&_a]:items-center [&_a]:h-full [&_a]:w-full [&_a]:py-1 [&_li:hover]:text-sari [&_li]:flex-1 [&_li]:w-full [&_li:hover]:bg-lime-500 [&_li:hover]:bg-opacity-60 ">
                        <li className="">
                            <a href="#home" className='hover:text-sari font-bold' >HOME</a>
                        </li>
                        <li className="">
                            <a href="#about" className='hover:text-sari font-bold'>ABOUT US</a>
                        </li>
                        <li className="">
                            <a href="#event" className='hover:text-sari font-bold'>EVENT</a>
                        </li>
                        <li className="">
                            <a href="#event" className='hover:text-sari font-bold'>PROFILE</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/reset-password' element={<ResetPassword/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default Routing