import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { PiUserCircleFill } from "react-icons/pi"
import { Link } from "react-router-dom"

const Navbar = () => {
  const masjidSource = "https://raw.githubusercontent.com/Faizzroi/MUSLIM-INDONESIA-WEB/8fa7b10db4712b9b0bbdd35568a80b4c7b527574/src/assets/react.svg"
  const [hover, setHover] = useState(false)

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
              <a href="/home" className=' hover:text-sari font-bold'>HOME</a>
              </li>
              <li className="h-full">
              <a href="/about" className='hover:text-sari font-bold'>ABOUT US</a>
              </li>
              <li className="h-full">
              <a href="/event" className='hover:text-sari font-bold'>EVENT</a>
              </li>
          </ul>
          <div className="aspect-square flex h-full ">
            <button className='flex-1 max-lg:hidden relative' onClick={()=>{document.getElementById("profile-pop-up").classList.toggle("!max-h-0 !max-w-0 !min-h-0 !min-w-0");document.getElementById("profile-pop-up").classList.toggle("!opacity-0")}}><PiUserCircleFill className='h-full w-full text-[16px] sm:p-2.5'/>
            </button>

            <button className="flex-1 lg:hidden" onClick={()=>{document.getElementById("nav-menu").classList.toggle("!h-0")}}><AiOutlineMenu className='h-full w-full text-[10px] p-4'/></button>
          </div>
      </div>
      <section id="profile-pop-up" className={`absolute duration-300 opacity-100 aspect-[2/2.4] w-[19vw] max-w-[280px] min-w-[220px] !max-h-0 !max-w-0 !min-h-0 !min-w-0 !opacity-0 overflow-hidden bg-white shadow-[0px_4px_13px_-2px_black] top-[92%] rounded-2xl right-[2.1%] flex items-center border-2 border-lime-600 outline outline-white`}>
        <ul className="w-full h-full py-8 flex flex-col justify-evenly items-center font-bold overflow-hidden">
            <li className="bg-green max-w-[8rem] max-h-[3rem] py-2 w-full bg-kryptonite rounded-full outline-kryptonite outline border-2 border-white border-opacity-40 flex justify-center">
                <Link to={"/user"}>
                    Profile
                </Link>
            </li>
            <button className="bg-green max-w-[8rem] max-h-[3rem] py-2 w-full bg-kryptonite rounded-full outline-kryptonite outline border-2 border-white border-opacity-40">log Out</button>
        </ul>
      </section>
      <div id="nav-menu" className="!h-0 w-full h-[14rem] z-10 sm:h-[16rem] absolute bottom-1 translate-y-[101%] overflow-hidden left-0 duration-500 ">
          <ul className="h-full flex flex-col items-center bg-kryptonite [&_a]:justify-center [&_a]:flex [&_a]:items-center [&_a]:h-full [&_a]:w-full [&_a]:py-1 [&_li:hover]:text-sari [&_li]:flex-1 [&_li]:w-full [&_li:hover]:bg-lime-500 [&_li:hover]:bg-opacity-60 ">
              <li className="">
                  <a href="/home" className='hover:text-sari font-bold' >HOME</a>
              </li>
              <li className="">
                  <a href="/about" className='hover:text-sari font-bold'>ABOUT US</a>
              </li>
              <li className="">
                  <a href="/event" className='hover:text-sari font-bold'>EVENT</a>
              </li>
              <li className="">
                  <Link to={"/user"} className="hover:text-sari font-bold">
                  PROFILE
                  </Link>
              </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar