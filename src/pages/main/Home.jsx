import { PiUserCircleFill, PiMagnifyingGlass, PiCaretDown, PiCalendar, }  from 'react-icons/pi'
import Slider from '@ant-design/react-slick'
import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown, BsArrowUp, BsBell, BsBellFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/StateContext';
import { Link, NavLink } from 'react-router-dom';
import { instance } from '../../services/api/api';

const Home = () => {

  const date = new Date
  let tanggal = date.toLocaleDateString("id-ID", {weekday:"long", day:"2-digit", month:"long", year:"numeric"})
  let tanggalIslam = date.toLocaleDateString("id-ID-u-ca-islamic", {day:"2-digit", month:"long", year:"numeric"})
  const {masjidSource} = useContext(Context)
  const namaUser = localStorage.getItem("name")
  const [userInfo, setUserInfo] = useState([])
  const [baseData, setBaseData] = useState([])
  const [data, setData] = useState([
    {
    image:masjidImage,
    nama:"Masjid Istiqlal",
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    image:masjidImage,
    nama:"Masjid Istiqlal",
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    image:masjidImage,
    nama:"Masjid Istiqlal",
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  }
])
  const listMasjid = ["Istiqlal", "An-nadia", "Al-masjid"]

useEffect(() => {
  
  return () => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `/read-place`,
      headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
       },
    };

   instance
   .request(config)
   .then((response)=>
   {
     console.log(response)
     setUserInfo(response.data.login)
     setData(response.data.user)
     setBaseData(response.data.user)
   })
   .catch((error)=>
   {
     console.log(error)
   })
  }
}, [])


  return (
    <div id='home' className="min-h-screen bg-white h-full flex flex-col w-full ">
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%] ' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header>
        <section className='text-white bg-kryptonite '>
          <div className='w-full flex bg-kryptonite justify-center flex-col items-center lg:py-1'>
            <h1 className='sm:text-[23px] lg:text-[25px] font-bold'>{tanggal}</h1>
            <h3 className='text-sari max-sm:text-[14px]'>{tanggalIslam}</h3>
          </div>
          {/* <div className='flex justify-center items-center bg-gradient-to-b from-kryptonite to-white from-[50%] to-[50%] py-3'>
            <div className='w-[72vw] h-[49px] lg:w-[44vw] sm:h-[52px] lg:h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden bg-white'>
              <input type="search" name="" id="search-bar" className='flex-1 text-[18px] pl-3 text-black focus-visible:outline-none'/>
              <label htmlFor="search-bar" >
                <PiMagnifyingGlass type='label' className='w-[60px] p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
              </label>
            </div>
          </div> */}
          <div className='h-[2.3rem]'></div>
        </section>
        <section className='bg-white relative'>
          <div className='w-[80vw] bg-white sm:w-[72vw] h-[40px] absolute -translate-y-[50%] left-[50%] lg:w-[44vw] sm:h-[52px] lg:h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden -translate-x-[50%] '>
            <input type="search" name="" id="search-bar" className='flex-1 text-[15px] lg:text-[18px] pl-3 text-black focus-visible:outline-none '/>
            <button className='rounded-r-full'>
              <PiMagnifyingGlass type='label' className='w-[45px] sm:w-[60px] pl-1 pr-2 py-1 sm:p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
            </button>
          </div>
          <div className='h-[2.3rem]'></div>
          <div className='w-full flex items-center justify-center sm:justify-end px-4'>
            <ul className=' text-[14px] gap-3 pl-1 lg:text-[15px] flex text-black sm:gap-6 [&_li]:relative [&_li_a]:font-bold hover:[&_button]:outline hover:[&_button]:outline-1 hover:[&_button]:rounded-md'>
              <li className='flex items-center'>
                <NavLink className={({isActive})=>isActive ? "rounded-2xl px-1.5 bg-lime-800 text-white border-2 border-white  hover:border-2 hover:border-lime-800 hover:text-lime-800 hover:bg-white" : "px-1.5 border-2 border-white hover:border-lime-800 rounded-2xl"} to={"/masjid"}>Masjid</NavLink>
                <button onClick={(e)=>{e.currentTarget.nextElementSibling.classList.toggle("!overflow-y-hidden");e.currentTarget.nextElementSibling.classList.toggle("!max-h-0")}}>
                  <PiCaretDown/>
                </button>
                <ul className='absolute w-[25vw] !max-h-0 max-h-[45vh] !duration-300 ease-in-out overflow-y-auto !overflow-y-hidden -bottom-1 right-0 translate-x-[46%] translate-y-full bg-white shadow-[0px_2px_5px_-1px_black]' >
                  {listMasjid.map((masjid)=>{
                    return(
                      <li className='p-3 border-b border-gray-700 last:border-b-0 '>{masjid}</li>
                    )
                  })}
                  
                </ul>
              </li>
              <li className='flex items-center'>
                <NavLink className={({isActive})=>isActive ? " rounded-2xl px-1 bg-gray-300" : "px-1"} to={"/resto"}>Restoran</NavLink> 
                <button onClick={(e)=>{e.currentTarget.nextElementSibling.classList.toggle("!overflow-y-hidden");e.currentTarget.nextElementSibling.classList.toggle("!max-h-0")}}>
                  <PiCaretDown/>
                </button>
                <ul className='absolute w-[25vw] !max-h-0 max-h-[45vh] !duration-300 ease-in-out overflow-y-auto !overflow-y-hidden -bottom-1 left-0 -translate-x-[50%] translate-y-full bg-white shadow-[0px_2px_5px_-1px_black]' >
                  {listMasjid.map((masjid)=>{
                    return(
                      <li className='p-3 border-b border-gray-700 last:border-b-0 '>{masjid}</li>
                    )
                  })}
                </ul>
              </li>
              <li className='flex items-center'>
                <NavLink className={({isActive})=>!isActive ? " rounded-2xl px-1 bg-gray-300" : "px-1"}>TPQ</NavLink>
                <button onClick={(e)=>{e.currentTarget.nextElementSibling.classList.toggle("!overflow-y-hidden");e.currentTarget.nextElementSibling.classList.toggle("!max-h-0")}}>
                  <PiCaretDown/>
                </button>
                <ul className='absolute w-[25vw] !max-h-0 max-h-[45vh] !duration-300 ease-in-out overflow-y-auto !overflow-y-hidden -bottom-1 right-0 translate-y-full bg-white shadow-[0px_2px_5px_-1px_black]' >
                  {listMasjid.map((masjid)=>{
                    return(
                      <li className='p-3 border-b border-gray-700 last:border-b-0 '>{masjid}</li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto bg-white'>
        <section className='flex items-center h-[90px] sm:h-[120px] lg:h-[160px]'>
          <div className='text-center w-full '>
            <h1 className='lg:text-[26px] sm:text-[125%]'>Assalamualaikum,</h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>Selamat datang <span className='font-bold'>{namaUser}</span></h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'>Indonesia</span></h1>
          </div>
          div
        </section> 
        <section className='sm:min-h-[500px]  max-sm:py-3 flex items-center lg:min-h-[350px] py-[3%]'>
          <ul className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-center flex-wrap'>
            {data.map((card, y)=>{
              return(
                <li key={y} className={`aspect-[4/2.5] relative w-[270px] lg:w-[54vh] lg:max-w-[400px] sm:w-[320px] rounded-xl overflow-hidden`}>
                  <img src={card.photo} alt="" className='h-full w-full'/>
                  <Link to={"/detail/masjid"} id='images' className='absolute top-0 h-full w-full flex flex-col justify-between text-white opacity-80 [&:hover_div:first-child]:!translate-y-0 after:bg-black after:bg-opacity-0 after:w-full after:h-full after:absolute after:top-0 after:backdrop-blur-2xl hover:after:bg-opacity-80 after:duration-500 [&:hover_div:last-child]:!translate-y-0'>
                    <div className='absolute max-w-[78%] overflow-hidden max-h-[35%] z-20 p-2 h-[32%] bg-gradient-to-b duration-500 ease-out translate-y-[-100%]'>
                      <h4 className='lg:text-[20px] text-sari font-bold'>{card.place_name}</h4>
                      <h5 className='text-[14px] lg:text-[15px]'>{card.regency}</h5>
                    </div>
                    <div className='absolute w-full z-20 bottom-0 p-2 flex duration-500 ease-out items-end h-[65%] translate-y-[100%] from-[45%] bg-gradient-to-t'>
                      <span className='max-sm:text-[14px] '>
                        {card.deskripsi_photo}
                      </span>
                    </div>
                  </Link>
                  <span className={`absolute top-[6.5%] right-[5%] rounded-2xl px-1 font-bold text-black text-[13px] ${card.categories == "Masjid" ? "bg-lime-600" : "bg-orange-600"}`}>{card.categories} </span>
                </li>
              )
            })}
          </ul>
        </section>
        
      </main>
      
    </div>
  )
}

export default Home