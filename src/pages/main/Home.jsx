import { PiMagnifyingGlass }  from 'react-icons/pi'
import masjidImage from "../../assets/example/masjid.png"
import { BsArrowDown } from 'react-icons/bs';
import { MdGpsFixed } from 'react-icons/md';
import { BiSolidBookmark, BiSolidBookmarkPlus } from 'react-icons/bi';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import { instance } from '../../services/api/api';
import ListDropdown from '../../components/ui/ListDropdown';

const Home = () => {

  const date = new Date
  let tanggal = date.toLocaleDateString("id-ID", {weekday:"long", day:"2-digit", month:"long", year:"numeric"}).split(",")
  let tanggalIslam = date.toLocaleDateString("id-ID-u-ca-islamic", {day:"2-digit", month:"long", year:"numeric"})

  const {setShowModal} = useContext(Context)
  const [notif, setNotif] = useState(false)
  const namaUser = localStorage.getItem("name")
  const [userInfo, setUserInfo] = useState([])
  const [baseData, setBaseData] = useState([
    {
    photo:masjidImage,
    place_name:"Masjid Istiqlal",
    lokasi:"Jakarta",
    lat: 12,
    long: 12,
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    place_name:"Resto Istiqlal",
    long: 16,
    lat: 16,
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    place_name:"TPQ Istiqlal",
    lat: 13,
    long: 13,
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  }
])
  const [data, setData] = useState([
    {
    photo:masjidImage,
    place_name:"Masjid Istiqlal",
    lokasi:"Jakarta",
    lat: 12,
    long: 12,
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    place_name:"Resto Istiqlal",
    long: 16,
    lat: 16,
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    place_name:"TPQ Istiqlal",
    lat: 13,
    long: 13,
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  }
])
const [tag, setTag] = useState("")
let dataMasjid = data.filter((content)=>content.categories?.toLowerCase() == "masjid")
let dataResto = data.filter((content)=>content.categories?.toLowerCase() == "restoran")
let dataTpq = data.filter((content)=>content.categories?.toLowerCase() == "tpq")

const searchHandler = (input) => {
  let filtered = baseData.filter((card)=>
  {
    for (const key in card) {
      if (card[key].toString().toLowerCase().includes(input.toLowerCase())) {
        return true
      }
    } 
  })
  
  console.log(filtered == '');
  if (filtered != '') {
    console.log(1);
    setData(filtered)
  } else if (data == baseData) {
    console.log(2);
    return false
  } else {
    console.log(3);
    setData(baseData)
  }
}

const closeLocationHandler = () => {
  navigator.geolocation.getCurrentPosition((myLocation)=>{
    setData(()=>{
      let closest = baseData.sort((a , b)=>{
        let squared1 = Math.sqrt(Math.pow(a.lat - myLocation.coords.latitude,2) + (Math.pow(a.long - myLocation.coords.longitude,2)))
        let squared2 = Math.sqrt(Math.pow(b.lat - myLocation.coords.latitude,2) + (Math.pow(b.long - myLocation.coords.longitude,2)))

        return  (squared2 - squared1)
      })
      return closest
    })
  },(error)=>{alert(error)});
}

const handleBookmark = (id) => {
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `create-bookmark/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  };

  instance
  .request(config)
  .then((y)=>
  {
    console.log(y)      
    setNotif(true)
    setTimeout(() => {
      setNotif(false)
    }, 5000);
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
     setBaseData(response.data.user?.reverse())
     setData(response.data.user.reverse())
   })
   .catch((error)=>
   {
     console.log(error)
   })
  }
}, [])

const token = localStorage.getItem("token")

  return (
    <div id='home' className="h-full flex flex-col w-full ">
      {notif &&
        <div className={`absolute quick-notification bottom-[10vh] peer right-1/2 translate-x-1/2 lg:text-[11px] px-[1%] bg-black/60 opacity-80 text-white rounded-2xl`}>Berhasil ditambahkan ke bookmark</div>
      }
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%]' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header>
        <section className='text-white bg-kryptonite '>
          <div className='w-full flex bg-kryptonite justify-center flex-col items-center lg:py-3'>
            <h1 className='sm:text-[23px] lg:text-[25px] font-bold'>{tanggal}</h1>
            <h3 className='text-sari max-sm:text-[14px] lg:text-[17px]'>{tanggalIslam}</h3>
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
        <section className='bg-white'>
          <div>
            <div className='w-[80vw] sm:w-[72vw] z-10 min-w-max h-[40px] absolute -translate-y-[50%] left-[50%] lg:w-[44vw] sm:h-[52px] lg:h-[50px] border flex border-gray-400 -translate-x-[50%] rounded-full group focus-within:rounded-3xl focus-within:rounded-b-none  '>
              <input type="search" name="" id="search-bar" className='border-r group border-black rounded-l-3xl group-focus-within:rounded-tl-3xl flex-1 text-[15px] lg:text-[18px] pl-3 text-black focus-visible:outline-none ' onChange={(e)=>{searchHandler(e.target.value)}} autoComplete={!token ? "off" : "on"} onFocus={()=>{!token && setShowModal("login")}} value={!token ? "" : undefined}/>
              <button className='group-focus-within:rounded-tr-3xl rounded-r-3xl bg-white'>
                <PiMagnifyingGlass type='label' className='w-[45px] sm:w-[60px] pl-1 pr-2 py-1 sm:p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
              </button>
              <div onClick={()=>{closeLocationHandler()}} className='absolute group-focus-within:h-12 overflow-hidden duration-300 cursor-pointer border-black/30 group-focus-within:w-[100.3%] w-[65%] flex h-0 text-[15px] justify-center items-center bg-white border rounded-b-3xl left-1/2 gap-1 px-[2%] bottom-0 translate-y-full -translate-x-1/2'>
                <span className='whitespace-nowrap w-max'>Cari Masjid terdekat </span>
                <div>
                  <MdGpsFixed className=''/>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[2.3rem]'></div>
          <div className='w-full flex items-center justify-center sm:justify-end px-4'>
            <ul className=' text-[14px] gap-3 pl-1 lg:text-[16px] flex text-black sm:gap-6 [&_li_a]:font-bold hover:[&_button]:outline hover:[&_button]:outline-1 hover:[&_button]:rounded-md [&_ul]:z-20'>
              <ListDropdown label="masjid" text="Masjid" list={dataMasjid} tag={tag} setTag={setTag}/>
              <ListDropdown label="restoran" text="Restoran" list={dataResto} tag={tag} setTag={setTag} translate={"!translate-x-[20%]"}/>
              <ListDropdown label="tpq" text="TPQ" list={dataTpq} tag={tag} setTag={setTag} translate={"!translate-x-[0%]"}/>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto bg-white pb-[4%] min-h-[calc(50vh-0.1rem)]'>
        <section className='flex items-center h-[90px] sm:h-[120px] lg:h-auto lg:py-[2%]'>
          <div className='text-center w-full leading-snug'>
            {token ? 
            <>
              <h1 className='lg:text-[26px] sm:text-[24px]'>Assalamualaikum,</h1>
              <h1 className='lg:text-[28px] sm:text-[25px]'>Selamat datang <span className='font-bold text-[18px] sm:text-[26px] lg:text-[26px]'>{namaUser}</span></h1>
              <h1 className='lg:text-[28px] sm:text-[150%]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'> Indonesia</span></h1>
            </> 
            : 
            <>
              <h1 className='lg:text-[26px] sm:text-[24px]'>Assalamualaikum,</h1>
              <h1 className='lg:text-[28px] sm:text-[25px]'>Selamat datang di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'> Indonesia</span></h1>
            </> }
          </div>
        </section> 
        <section className='sm:min-h-[500px] max-sm:py-3 flex items-start justify-center lg:min-h-[280px] py-[3%] lg:pt-[1%] lg:pb-[10%]'>
          <ul className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-start flex-wrap'>
            {(window.location.hash == "#masjid" ? dataMasjid : window.location.hash == "#restoran" ? dataResto : window.location.hash == "#tpq" ? dataTpq : data ).map((card, y)=>{
              return(
                <li key={y} className={`aspect-[4/2.5] flex relative w-[270px] lg:w-[54vh] lg:max-w-[400px] sm:w-[320px] shadow-[1px_2px_6px_0px] shadow-black/70 rounded-xl`}>
                  <img src={card.photo} alt="" className='h-full w-full rounded-xl '/>
                  <Link target='_blank' to={`https://www.google.com/maps/search/${card.lat},${card.long}`} id='images' className='overflow-hidden absolute top-0 h-full w-full flex flex-col justify-between rounded-xl text-white opacity-80 [&:hover_div:first-child]:!translate-y-0 after:bg-black after:bg-opacity-0 after:w-full after:h-full after:absolute after:top-0 after:backdrop-blur-2xl hover:after:bg-opacity-80 after:duration-500 [&:hover_div:last-child]:!translate-y-0'>
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
                  
                  <span onClick={(e)=>{handleBookmark(card.id)}} className={`cursor-pointer absolute bottom-[-9%] text-[33px] group right-[4.5%] ${card.categories == "Masjid" ? "text-yellow-500" : card.categories == "Restoran" ? "text-orange-600" : card.categories == "TPQ" ? "text-lime-700" : "text-red-600"}`}>
                    <BiSolidBookmark className='group-hover:hidden '/>
                    <BiSolidBookmarkPlus className='hidden group-hover:flex'/>
                  </span>
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