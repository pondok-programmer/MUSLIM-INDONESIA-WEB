import { useContext, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BiBookBookmark, BiBookmark, BiExit, BiUserCircle } from "react-icons/bi"
import { } from "react-icons/bs"
import { } from "react-icons/ci"
import { } from "react-icons/cg"
import { PiUserCircle, PiUserCircleFill } from "react-icons/pi"
import { Link, NavLink } from "react-router-dom"
import { Context } from "../../context/StateContext"

const Navbar = () => {
  const masjidSource = "https://raw.githubusercontent.com/Faizzroi/MUSLIM-INDONESIA-WEB/8fa7b10db4712b9b0bbdd35568a80b4c7b527574/src/assets/react.svg"
  const [hover, setHover] = useState(false)
  const [mobileMenu, setmobileMenu] = useState(false)
  const {masjidImage} = useContext(Context)
  const [profilePopup, setProfilePopup] = useState(false)
  const popupClasses = ["!min-w-0","!max-w-0", "h-0", "!opacity-0"]
  let timer;

  const handleLogout = (e) => {
    e.preventDefault()

    // let data = new FormData();
    // data.append('email', email);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/logout',
      header: {
        Authorization: `Bearer `
    }
    //   data : data
    };

    instance
    .request(config)
    .then((y)=>
    {
      console.log(y)
      redirect("/")
    })
    .catch((y)=>
    {
    //   redirect("/home")
      console.log(y)
    })
  }

  console.log(window.innerWidth);

  return (
    <nav className="h-14 sm:h-[3.7rem] w-full lg:h-14 bg-kryptonite z-40 flex justify-between sticky top-0 text-white sm:px-0.5 lg:px-4">
      <div className="h-full w-1/2 flex items-center lg:pb-1">
          <Link to={"/home"}>
              <figure className='flex gap-0.5 sm:gap-1.5 '>
                  <img src={masjidSource} alt="" className='h-12 max-sm:h-11'/>
                  <figcaption className='w-min leading-5 py-0.5'><span className="text-sari">Muslim</span> Indonesia</figcaption>
              </figure>
          </Link>
      </div>
      <div className="flex sm:h-full lg:w-1/2 w-full lg:justify-between justify-end">
          <ul className="h-full hidden lg:flex justify-center flex-1 [&_li]:flex-[0_9vw] [&_li]:text-[1.4vw] lg:[&_li]:text-[18px] [&_li]:flex [&_li]:justify-center [&_li]:items-center">
              <li className="h-full ">
              <NavLink to="/home" className=' hover:text-sari font-bold' tabIndex={(window.innerWidth < 1024) ? -1 : ""}>HOME</NavLink>
              </li>
              <li className="h-full">
              <NavLink to="/about" className='hover:text-sari font-bold' tabIndex={(window.innerWidth < 1024) ? -1 : ""}>ABOUT US</NavLink>
              </li>
              <li className="h-full">
              <NavLink to="/event" className='hover:text-sari font-bold' tabIndex={(window.innerWidth < 1024) ? -1 : ""}>EVENT</NavLink>
              </li>
          </ul>
          <div className="aspect-square flex h-full max-lg:py-[2px]">
            <button className='flex-1 max-lg:hidden relative' onClick={()=>{setProfilePopup(!profilePopup)}}  tabIndex={(window.innerWidth < 1024) ? -1 : ""}><PiUserCircleFill className='h-full w-full text-[16px] sm:p-2.5'/>
            </button>

            <button className="flex-1 lg:hidden" onClick={()=>{setmobileMenu(!mobileMenu)}} tabIndex={(window.innerWidth > 1024) ? -1 : ""}><AiOutlineMenu className='h-full w-full text-[10px] p-4' /></button>
          </div>
      </div>
      <section id="profile-pop-up" className={`absolute ${!profilePopup && `!min-w-0 !max-w-0 !w-0  !h-0 !opacity-0`} h-[43.3vh] px-3 py-1 duration-300 opacity-100 !aspect-[2/2.4] w-[19vw] max-w-[280px] min-w-[220px] overflow-hidden bg-white shadow-[0px_4px_13px_-2px_black] top-[92%] rounded-2xl right-[2.1%] flex flex-col text-black border-2 border-kryptonite outline outline-white`}>
        <div className="h-[40%] w-full ">
          <div className=" h-full py-2 items-center flex flex-col">
            <figure className="h-full border-[3px] border-lime-800 flex rounded-full items-center aspect-square overflow-hidden">
              <img src={masjidImage} alt="profile-picture" className="h-full w-full object-cover" />
            </figure>
            <div className="pt-1 text-[17px]">
              <span>Roihan Faiz</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[6%] text-[15px] px-1 py-4">
          <div className="">
            <Link to={"/user"} className="hover:bg-lime-600 hover:bg-opacity-30 rounded-2xl py-1 px-1.5 cursor-pointer flex items-center whitespace-nowrap"><PiUserCircle className="text-[18px]"/> &#0; Pengaturan Profile</Link>
          </div>
          <div>
            <Link className="hover:bg-lime-600 hover:bg-opacity-30 rounded-2xl py-1 px-1.5 cursor-pointer flex items-center whitespace-nowrap"><BiBookmark className="text-[17px]"/> &#0; Bookmark</Link>
          </div>
        </div>
        <hr className="h-[1.5px] bg-kryptonite bg-opacity-60"/>
        <div className="h-[16%] py-2 px-3.5 text-red-700">
          <button className="flex items-center">Keluar &#0;<BiExit/></button>
        </div>
        {/* <ul className="w-full h-full py-8 flex flex-col justify-evenly items-center font-bold overflow-hidden">
          <li className="w-full">
            <Link to={"/user"} className="bg-green mx-auto max-w-[8rem] max-h-[3rem] py-2 w-full bg-kryptonite rounded-full outline-kryptonite outline border-2 border-white border-opacity-40 flex justify-center focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-black" tabIndex={!profilePopup ? -1 : ""}>
                Profile
            </Link>
          </li>
          <li className="w-full">
            <button className="bg-green mx-auto max-w-[8rem] max-h-[3rem] py-2 w-full bg-kryptonite rounded-full outline-kryptonite outline border-2 border-white border-opacity-40 flex justify-center focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-black">log Out</button>
          </li>
        </ul> */}
      </section>
      <div id="nav-menu" className={`w-full h-[14rem] sm:h-[16rem] absolute bottom-1 translate-y-[99.8%] overflow-hidden left-0 duration-500 ${!mobileMenu ? `!h-0` : "py-1"}`}>
        <ul className="h-full flex flex-col items-center bg-kryptonite [&_a]:justify-center [&_a]:flex [&_a]:items-center [&_a]:h-full [&_a]:w-full [&_a]:py-1 [&_li:hover]:text-sari [&_li]:flex-1 [&_li]:w-full [&_li:hover]:bg-lime-500 [&_li:hover]:bg-opacity-60 " >
          <li className="">
            <NavLink to="/home" className='hover:text-sari font-bold' tabIndex={(window.innerWidth > 1024) ? -1 : ""}>HOME</NavLink>
          </li>
          <li className="">
            <NavLink to="/about" tabIndex={(window.innerWidth > 1024) ? -1 : ""} className='hover:text-sari font-bold'>ABOUT US</NavLink>
          </li>
          <li className="">
            <NavLink to="/event" className='hover:text-sari font-bold' tabIndex={(window.innerWidth > 1024) ? -1 : ""}>EVENT</NavLink>
          </li>
          <li className="">
            <NavLink to={"/user"} className="hover:text-sari font-bold" tabIndex={(window.innerWidth > 1024) ? -1 : ""}>
              PROFILE
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar