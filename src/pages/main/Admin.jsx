import { PiMagnifyingGlass }  from 'react-icons/pi'
import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown, BsPencilSquare, BsPlus, BsTrash} from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import { instance } from '../../services/api/api';
import ListDropdown from '../../components/ui/ListDropdown';

const Admin = () => {

  const { setShowModal } = useContext(Context)
  const [notif, setNotif] = useState(false)
  const [baseData, setBaseData] = useState([])
  const [data, setData] = useState([
    {
    photo:masjidImage,
    nama:"Masjid Istiqlal",
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    nama:"Masjid Istiqlal",
    lokasi:"Jakarta",
    detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
  },
  {
    photo:masjidImage,
    nama:"Masjid Istiqlal",
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

const handleDelete = (id) => {
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `delete-place/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
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
    //  setUserInfo(response.data.login)
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
      <Link to={"/admin/create"} className='fixed bottom-10 shadow-[0px_1px_3px_1px] shadow-black/70 bg-white text-lime-700 right-6 rounded-full p-3 z-10'>
        <BsPlus className="text-[28px]"/>
      </Link>
      {notif &&
        <div className={`absolute quick-notification bottom-[10vh] peer right-1/2 translate-x-1/2 lg:text-[11px] px-[1%] bg-black/60 opacity-80 text-white rounded-2xl`}>Data berhasil dihapus</div>
      }
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%]' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header>
        <section className='bg-white flex max-lg:flex-col px-[3%] justify-center max-lg:justify-end items-center h-[100px] max-lg:h-[130px]'>
          <div className='w-[80vw] sm:h-[48px] lg:h-[50px] lg:w-[60vw] border max-lg:w-[70%] flex border-black rounded-[10rem] overflow-hidden'>
            <input type="search" name="" id="search-bar" className='flex-1 text-[15px] lg:text-[18px] pl-3 text-black focus-visible:outline-none ' onChange={(e)=>{searchHandler(e.target.value)}} autoComplete={!token ? "off" : "on"} onFocus={()=>{!token && setShowModal("login")}} value={!token ? "" : undefined}/>
            <button className='rounded-r-full bg-white'>
              <PiMagnifyingGlass type='label' className='w-[45px] sm:w-[60px] pl-1 pr-2 py-1 sm:p-2 text-black   flex justify-center items-center h-full'/>
            </button>
          </div>
          <div className='w-full flex items-center max-lg:py-[2%] lg:justify-center max-lg:justify-center'>
            <ul className=' text-[14px] gap-3 pl-1 lg:text-[16px] flex text-black sm:gap-6 [&_li_a]:font-bold hover:[&_button]:outline hover:[&_button]:outline-1 hover:[&_button]:rounded-md [&_ul]:z-20'>
              <ListDropdown label="masjid" text="Masjid" list={dataMasjid} tag={tag} setTag={setTag}/>
              <ListDropdown label="restoran" text="Restoran" list={dataResto} tag={tag} setTag={setTag} translate={"lg:!translate-x-[20%]"}/>
              <ListDropdown label="tpq" text="TPQ" list={dataTpq} tag={tag} setTag={setTag} translate={"lg:!translate-x-[0%]"}/>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto bg-white pb-[4%] min-h-[calc(50vh-0.1rem)]'>
        <section className='sm:min-h-[500px] max-sm:py-3 flex items-start justify-center lg:min-h-[280px] py-[3%] lg:pt-[2%] lg:pb-[10%]'>
          <ul className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-start flex-wrap'>
            {(window.location.hash == "#masjid" ? dataMasjid : window.location.hash == "#restoran" ? dataResto : window.location.hash == "#tpq" ? dataTpq : data ).map((card, y)=>{
              return(
                <li key={y} className={`aspect-[4/2.5] relative w-[270px] lg:w-[54vh] lg:max-w-[400px] sm:w-[320px] shadow-[1px_2px_6px_0px] shadow-black/70 rounded-xl overflow-hidden group`}>
                  <img src={card.photo} alt="" className='h-full w-full rounded-xl '/>
                  <Link target='_blank' to={`https://www.google.com/maps/search/${card.lat},${card.long}`} id='images' className='overflow-hidden absolute top-0 h-full w-full flex flex-col justify-between rounded-xl text-white opacity-80 group-hover:after:bg-opacity-80 after:bg-black after:bg-opacity-0 after:w-full after:h-full after:absolute after:top-0 after:backdrop-blur-2xl after:duration-500'>
                    <div className='absolute max-w-[78%] overflow-hidden max-h-[35%] z-20 p-2 h-[32%] bg-gradient-to-b duration-500 ease-out translate-y-[-100%] group-hover:!translate-y-0'>
                      <h4 className='lg:text-[20px] text-sari font-bold'>{card.place_name}</h4>
                      <h5 className='text-[14px] lg:text-[15px]'>{card.regency}</h5>
                    </div>
                    <div className='absolute w-full z-20 bottom-0 p-2 flex duration-500 ease-out items-end h-[65%] translate-y-[100%] group-hover:!translate-y-0'>
                      <span className='max-sm:text-[14px] '>
                        {card.deskripsi_photo}
                      </span>
                    </div>
                  </Link>
                  <button className='aspect-square absolute !h-[26px] text-[17px] z-[21] justify-center items-center flex top-4 right-[4.5%] shadow-md shadow-black/70 to-white from-gray-300 from-[30%] bg-gradient-to-tr rounded-lg text-red-600 group-hover:translate-y-0 translate-y-[-190%]'
                  onClick={()=>{handleDelete(card.id)}}>
                    <BsTrash className='flex justify-end'/>
                  </button>
                  <Link to={`/admin/edit/${card.id}`} className='aspect-square absolute !h-[26px] text-[17px] z-[21] justify-center items-center flex top-4 right-[16%] shadow-md shadow-black/70 to-white from-gray-300 from-[30%] bg-gradient-to-tr rounded-lg text-red-600 group-hover:translate-y-0 translate-y-[-190%]'>
                    <BsPencilSquare/>
                  </Link>
                </li>
              )
            })}
          </ul>
          
        </section>
        
      </main>
      
    </div>
  )
}

export default Admin