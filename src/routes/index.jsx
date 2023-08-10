import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { SignIn, SignUp, Home, Masjid, Profile } from "../pages"
import NotFound from "../pages/not-found/NotFound"
import { BsArrowUp, BsBell, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"
// import Navbar from "../components/Navbar"
import { useContext } from 'react'
import { Context } from "../context/StateContext"
import { PiIntersectThree, PiUserCircleFill } from "react-icons/pi"
import { AiOutlineMenu } from "react-icons/ai"
// import Masjid from "../pages/main/Masjid"
import DetailMasjid from "../pages/details/DetailMasjid"

const Routing = () => {

    const {masjidSource} = useContext(Context)

    return (
        <>
        {/* <Navbar/> */}
            <button className='bell fixed bottom-10 bg-white text-lime-700 right-6 rounded-full p-3 z-10'>
                <BsBell className="text-[28px]"/>
            </button>

            <nav className="sm:h-[3.7rem] w-full lg:h-14 bg-kryptonite z-40 flex justify-between sticky top-0 text-white sm:px-0.5 lg:px-4">
                <div className="h-full w-1/2 flex items-center lg:pb-1">
                    <Link to={"/home"}>
                        <figure className='flex gap-0.5 sm:gap-1.5 '>
                            <img src={masjidSource} alt="" className='h-12 max-sm:h-11'/>
                            <figcaption className='w-min leading-5 py-0.5'><span className="text-sari">Muslim</span> Indonesia</figcaption>
                        </figure>
                    </Link>
                </div>
                <div className="flex sm:h-full lg:w-1/2 w-full lg:justify-between justify-end">
                    <ul className="h-full hidden lg:flex justify-center flex-1 [&_li]:flex-[0_9vw] [&_li]:text-[1.4vw] [&_li]:flex [&_li]:justify-center [&_li]:items-center">
                        <li className="h-full ">
                        <a href="#home" className=' hover:text-sari font-bold'>HOME</a>
                        </li>
                        <li className="h-full">
                        <a href="#about" className='hover:text-sari font-bold'>ABOUT US</a>
                        </li>
                        <li className="h-full">
                        <a href="#event" className='hover:text-sari font-bold'>EVENT</a>
                        </li>
                    </ul>
                    <div className="aspect-square flex h-full ">
                        <button className='flex-1 max-lg:hidden'><PiUserCircleFill className='h-full w-full text-[16px] sm:p-2.5'/></button>

                        <button className="flex-1 lg:hidden" onClick={()=>{document.getElementById("nav-menu").classList.toggle("!h-0")}}><AiOutlineMenu className='h-full w-full text-[10px] p-4'/></button>
                    </div>
                </div>
                <div id="nav-menu" className="!h-0 w-full h-[14rem] z-10 sm:h-[16rem] absolute bottom-1 translate-y-[101%] overflow-hidden left-0 duration-500 ">
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
                            <Link to={"/user"} className="hover:text-sari font-bold">
                            PROFILE
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/masjid' element={<Masjid/>} />
                <Route path='/user' element={<Profile/>} />
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