import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ResetPassword, SignIn, SignUp, Home } from "../pages"
import NotFound from "../pages/not-found/NotFound"
import { BsBell } from "react-icons/bs"
// import Navbar from "../components/Navbar"
import { useContext } from 'react'
import { Context } from "../context/StateContext"
import { PiUserCircleFill } from "react-icons/pi"

const Routing = () => {

    const {masjidSource} = useContext(Context)

    return (
        <>
        {/* <Navbar/> */}
            <button className='bell fixed bottom-10 bg-white text-lime-500 right-6 rounded-full p-3 z-10'>
                <BsBell className="text-[28px]"/>
            </button>
            <nav className="h-16 bg-kryptonite z-10 flex justify-between sticky top-0 text-white px-4">
                <div className="h-full w-1/2 pt-2">
                <figure className='flex gap-1.5'>
                    <img src={masjidSource} alt="" className='h-12'/>
                    <figcaption className='w-min'><span className="text-sari">Muslim</span> Indonesia</figcaption>
                </figure>
                </div>
                <div className="flex h-full w-1/2 justify-between">
                <ul className="h-full flex justify-center flex-1 [&_li]:flex-[0_18%] [&_li]:flex [&_li]:justify-center [&_li]:items-center">
                    <li className="h-full">
                    <a href="" className='hover:text-sari font-bold'>HOME</a>
                    </li>
                    <li className="h-full">
                    <a href="" className='hover:text-sari font-bold'>ABOUT US</a>
                    </li>
                    <li className="h-full">
                    <a href="" className='hover:text-sari font-bold'>EVENT</a>
                    </li>
                </ul>
                <div className="aspect-square flex h-full">
                    <button className='flex-1'><PiUserCircleFill className='h-full w-full text-[16px] p-2.5'/></button>
                </div>
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