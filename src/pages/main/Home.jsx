import { PiUserCircleFill, PiMagnifyingGlass, PiCaretDown, PiCalendar, PiMosque, PiMosqueBold, }  from 'react-icons/pi'
import Slider from '@ant-design/react-slick'
import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown, BsArrowUp, BsBell, BsBellFill, BsBookmark, BsBookmarkFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/StateContext';
import { Link, NavLink } from 'react-router-dom';
import { instance } from '../../services/api/api';
import ListDropdown from '../../components/ui/ListDropdown';

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
const [tag, setTag] = useState("")
let dataMasjid = data.filter((content)=>content.categories == "Masjid")
let dataResto = data.filter((content)=>content.categories == "Restoran")
let dataTpq = data.filter((content)=>content.categories == "TPQ")
const [masjid, setMasjid] = useState([])
const [restoran, setRestoran] = useState([])
const [tpq, setTpq] = useState([])
const listMasjid = ["Istiqlal", "An-nadia", "Al-masjid"]

const handleBookmark = () => {
  
  let data = new FormData();
  data.append('full_name', name);
  data.append('photo', image);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `/edit-profile/${localStorage.getItem("username")}`,
    data : data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  instance
  .request(config)
  .then((y)=>
  {
    console.log(y)
  })
  .catch((y)=>
  {
    console.log(y)
  })
}

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
     setBaseData(response.data.user.reverse())
     setData(response.data.user.reverse())
   })
   .catch((error)=>
   {
     console.log(error)
   })
  }
}, [])

  return (
    <div id='home' className="h-full flex flex-col w-full ">
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%]' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
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
        <section className='bg-white '>
          <div className='w-[80vw] bg-white sm:w-[72vw] h-[40px] absolute -translate-y-[50%] left-[50%] lg:w-[44vw] sm:h-[52px] lg:h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden -translate-x-[50%] '>
            <input type="search" name="" id="search-bar" className='flex-1 text-[15px] lg:text-[18px] pl-3 text-black focus-visible:outline-none '/>
            <button className='rounded-r-full'>
              <PiMagnifyingGlass type='label' className='w-[45px] sm:w-[60px] pl-1 pr-2 py-1 sm:p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
            </button>
          </div>
          <div className='h-[2.3rem]'></div>
          <div className='w-full flex items-center justify-center sm:justify-end px-4'>
            <ul className=' text-[14px] gap-3 pl-1 lg:text-[15px] flex text-black sm:gap-6 [&_li_a]:font-bold hover:[&_button]:outline hover:[&_button]:outline-1 hover:[&_button]:rounded-md [&_ul]:z-20'>
              <ListDropdown label="masjid" text="Masjid" list={dataMasjid} tag={tag} setTag={setTag}/>
              <ListDropdown label="restoran" text="Restoran" list={dataResto} tag={tag} setTag={setTag}/>
              <ListDropdown label="tpq" text="TPQ" list={dataTpq} tag={tag} setTag={setTag}/>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto bg-white min-h-[calc(50vh-0.1rem)]'>
        <section className='flex items-center h-[90px] sm:h-[120px] lg:h-[160px]'>
          <div className='text-center w-full leading-snug'>
            <h1 className='lg:text-[26px] sm:text-[24px]'>Assalamualaikum,</h1>
            <h1 className='lg:text-[28px] sm:text-[25px]'>Selamat datang <span className='font-bold text-[18px] sm:text-[26px] lg:text-[28px]'>{namaUser}</span></h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'>Indonesia</span></h1>
          </div>
        </section> 
        <section className='sm:min-h-[500px]  max-sm:py-3 flex items-center lg:min-h-[350px] py-[3%]'>
          <ul className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-center flex-wrap'>
            {(window.location.hash == "#masjid" ? dataMasjid : window.location.hash == "#restoran" ? dataResto : window.location.hash == "#tpq" ? dataTpq : data ).map((card, y)=>{
              return(
                <li key={y} className={`aspect-[4/2.5] relative w-[270px] lg:w-[54vh] lg:max-w-[400px] sm:w-[320px] `}>
                  <img src={card.photo} alt="" className='h-full w-full rounded-xl '/>
                  <Link to={"/detail/masjid"} id='images' className='overflow-hidden absolute top-0 h-full w-full flex flex-col justify-between rounded-xl text-white opacity-80 [&:hover_div:first-child]:!translate-y-0 after:bg-black after:bg-opacity-0 after:w-full after:h-full after:absolute after:top-0 after:backdrop-blur-2xl hover:after:bg-opacity-80 after:duration-500 [&:hover_div:last-child]:!translate-y-0'>
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
                  
                  <span className={`absolute bottom-[5%] text-[20px] right-[3%] shadow-xl ${card.categories == "Masjid" ? "text-lime-700" : "text-orange-600"}`}><BsBookmark/></span>
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