import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown} from 'react-icons/bs';
import { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../../context/StateContext';
import { instance } from '../../services/api/api';
import GoogleMapReact from 'google-map-react';
import InputAdmin from "../../components/ui/InputAdmin";

const Admin = () => {

  const date = new Date
  let tanggal = date.toLocaleDateString("id-ID", {weekday:"long", day:"2-digit", month:"long", year:"numeric"}).split(",")
  let tanggalIslam = date.toLocaleDateString("id-ID-u-ca-islamic", {day:"2-digit", month:"long", year:"numeric"})

  const reference = useRef(null)

  const {masjidSource} = useContext(Context)
  const [notif, setNotif] = useState(false)
  const namaUser = localStorage.getItem("name")
  const [userInfo, setUserInfo] = useState([])
  const [baseData, setBaseData] = useState([])
  const [data, setData] = useState([])

const [edit, setEdit] = useState(false)

const [namaLokasi, setNamaLokasi] = useState("")
const [kategori, setKategori] = useState("")
const [deskripsi, setDeskripsi] = useState("")
const [photo, setPhoto] = useState("")
const [deskripsiLokasi, setDeskripsiLokasi] = useState("")
const [provinsi, setProvinsi] = useState("")
const [kota, setKota] = useState("")
const [kabupaten, setKabupaten] = useState("")
const [desa, setDesa] = useState("")
const [alamat, setAlamat] = useState("")
const [lat, setLat] = useState(0)
const [long, setLong] = useState(0)

const [preview, setPreview] = useState(null);
const [defaultPreview, setDefaultPreview] = useState(null);
const [image, setImage] = useState(null);


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


const pickImage = (e) => {
  e.preventDefault()
  reference.current.click()
}

const imageChangeHandler = (e) =>{
   setPreview(URL.createObjectURL(e.target.files[0]))
   setImage(e.target.files[0])
}

const handleEdit = (e) => {
  e.preventDefault()
  console.log(name);
  console.log(image);

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

const handleDelete = (e) => {
  e.preventDefault()

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `/delete-profile/${""}`,
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
    redirect("/")
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
      <main className='h-auto w-full items-center justify-center bg-zinc-300 pb-[4%] min-h-[calc(68vh-0.1rem)] flex flex-col p-5'>
        <form className="w-[55%] min-w-[470px] max-w-[550px] p-2 flex-1 flex flex-col gap-4 rounded-2xl bg-white">
          <div className="h-[40px] flex-grow flex flex-col w-full mx-auto p-[3px] items-center justify-center">
            <input type="checkbox" name="" id="change-type" className="!h-0 !w-0 hidden"/>
            <label htmlFor="change-type" id="type-label" className="mx-auto bg-slate-500/30 w-[63%] relative  rounded-full h-full">
              
            </label>
          </div>
          <div className='w-full rounded-2xl flex flex-col gap-[3%] justify-between items-center'>
            <button tabIndex={0} className={`${!preview && "flex items-center justify-center"} relative overflow-hidden w-full aspect-[1.45/1] rounded-2xl bg-slate-500/30 hover:after:absolute p-0.5`} 
            onClick={(e)=>{pickImage(e)}}>
              {!preview ? 
              <label className="border-4 cursor-pointer border-slate-600/50 border-dashed w-full h-full flex items-center justify-center opacity-80 rounded-2xl">
                tambah gambar <span className=""> +</span>
              </label> 
              : 
              <img src={preview} alt="" className='h-full border-4 rounded-2xl border-white w-full object-cover' />
              }
            </button>
            <input ref={reference} type="file" name="" id="" className='hidden' 
            onChange={(e)=>{imageChangeHandler(e)}}/>
          </div>
          <div id="inputs-coniner" className="w-full min-h-0 h-auto flex-col flex gap-[1.4vh] [&_>_div]:w-full [&_>_div]:px-1 [&_input]:py-1 [&_input]:shadow-inner [&_input]:shadow-black/70 [&_input]:w-full justify-stretch items-stretch">
            <InputAdmin label={"Nama:"} functionModifier={setNamaLokasi}></InputAdmin>
            <InputAdmin label={"Kategori:"} functionModifier={setKategori}></InputAdmin>
            <InputAdmin label={"Keterangan:"} functionModifier={setDeskripsi}></InputAdmin>
            <InputAdmin label={"Deskripsi Tempat:"} functionModifier={setDeskripsiLokasi}></InputAdmin>
            <InputAdmin label={"provinsi:"} functionModifier={setProvinsi}></InputAdmin>
            <InputAdmin label={"Kota:"} functionModifier={setKota}></InputAdmin>
            <InputAdmin label={"Kabupaten:"} functionModifier={setKabupaten}></InputAdmin>
            <InputAdmin label={"Desa:"} functionModifier={setDesa}></InputAdmin>
            <InputAdmin label={"Alamat:"} functionModifier={setAlamat}></InputAdmin>
            <InputAdmin label={"Latitude:"} functionModifier={setLat}></InputAdmin>
            <InputAdmin label={"Longitude:"} functionModifier={setLong}></InputAdmin>
          </div>
          <div className="w-full py-[2%]">
            <button className="mx-auto float-right bg-kryptonite text-white px-[3%] py-[1.5%] rounded-full">
              Tambah Lokasi
            </button>
          </div>
        </form>
      </main>
      
    </div>
  )
}

export default Admin