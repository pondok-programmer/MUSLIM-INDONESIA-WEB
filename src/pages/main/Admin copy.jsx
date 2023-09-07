import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown} from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/StateContext';
import { instance } from '../../services/api/api';
import GoogleMapReact from 'google-map-react';

const Admin = () => {

  const date = new Date
  let tanggal = date.toLocaleDateString("id-ID", {weekday:"long", day:"2-digit", month:"long", year:"numeric"}).split(",")
  let tanggalIslam = date.toLocaleDateString("id-ID-u-ca-islamic", {day:"2-digit", month:"long", year:"numeric"})

  const {masjidSource} = useContext(Context)
  const [notif, setNotif] = useState(false)
  const namaUser = localStorage.getItem("name")
  const [userInfo, setUserInfo] = useState([])
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
let dataMasjid = data.filter((content)=>content.categories == "Masjid")
let dataResto = data.filter((content)=>content.categories == "Restoran")
let dataTpq = data.filter((content)=>content.categories == "TPQ")
const [masjid, setMasjid] = useState([])
const [restoran, setRestoran] = useState([])
const [tpq, setTpq] = useState([])
const listMasjid = ["Istiqlal", "An-nadia", "Al-masjid"]

const searchHandler = (input) => {
  let filtered = baseData.filter((card)=>
  {
    for (const key in card) {
      return card[key].includes(input)
    } 
  })

  if (!filtered) {
    setData(filtered)
  } else if (data == baseData) {
    return false
  } else {
    setData(baseData)
  }
}

const handleBookmark = (id) => {
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `/create-bookmark/${localStorage.getItem("username")}/${id}`,
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
      {notif &&
        <div className={`absolute quick-notification bottom-[10vh] peer right-1/2 translate-x-1/2 lg:text-[11px] px-[1%] bg-black/60 opacity-80 text-white rounded-2xl`}>Berhasil ditambahkan ke bookmark</div>
      }
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%]' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <main className='h-auto bg-white pb-[4%] min-h-[calc(68vh-0.1rem)] flex flex-col'>
        <div className='w-full'>
          
        </div>
      </main>
      
    </div>
  )
}

export default Admin