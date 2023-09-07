import { BsArrowDown} from 'react-icons/bs';
import { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../../context/StateContext';
import { instance } from '../../services/api/api';
import InputAdmin from "../../components/ui/InputAdmin";
import { useParams } from "react-router-dom";

const AdminEdit = () => {

  const {id} = useParams()
  const reference = useRef(null)

  const {masjidSource} = useContext(Context)
  const [notif, setNotif] = useState(false)
  const [data, setData] = useState(
    {
      "username": "Luqman",
      "photo": "https://res.cloudinary.com/dr0mczzjl/image/upload/v1692758770/place/2023-08-23_024608_Screenshot_from_2023-08-11_10-34-31.png",
      "id": 2,
      "user_id": 1,
      "place_name": "Masjid Agung Bandung1",
      "categories": "Masjid1",
      "deskripsi_photo": "Di ambil tahun 20231",
      "province": "Jawa Barat1",
      "regency": "Bandung1",
      "district": "Coblong1",
      "village": "Dago1",
      "addres": "Jl. Raya Dago No. 12341",
      "long": "107.61111111",
      "lat": "-6.874890111",
      "created_at": "2023-08-23 02:46:11",
      "updated_at": "2023-08-23 02:46:11"
  })


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

const pickImage = (e) => {
  e.preventDefault()
  reference.current.click()
}

const imageChangeHandler = (e) =>{
   setPreview(URL.createObjectURL(e.target.files[0]))
   setImage(e.target.files[0])
}

handleUpdate = (e) => {
  e.preventDefault()

  let data = new FormData();
  data.append('address', alamat);
  data.append('categories', kategori);
  data.append('deskripsi_photo', deskripsiLokasi);
  data.append('district', kabupaten);
  data.append('lat', lat);
  data.append('long', long);
  // data.append('phone_number', name);
  data.append('photo', image);
  data.append('place_name', namaLokasi);
  data.append('province', provinsi);
  data.append('regency', kota);
  data.append('village', desa);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `/edit-place/${id}`,
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
      url: `read-detail-place/${localStorage.getItem("username")}/${id}`,
      headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
       },
    };

   instance
   .request(config)
   .then((response)=>
   {
     console.log(response)
     setData(response.data.user[0])
     setPreview(response.data.user[0].photo)

     fetch(response.data.user[0].photo)
     .then((result)=>{
      setImage(result.blob())
     })
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
        <form onSubmit={(e)=>{handleUpdate(e)}} className="w-[55%] min-w-[470px] max-w-[550px] p-2 flex-1 flex flex-col gap-4 rounded-2xl bg-white">
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
              <img src={preview} alt="" className='h-full border-4 rounded-2xl border-white w-full object-contain' />
              }
            </button>
            <input ref={reference} type="file" name="" id="" className='hidden' 
            onChange={(e)=>{imageChangeHandler(e)}}/>
          </div>
          <div id="inputs-coniner" className="w-full min-h-0 h-auto flex-col flex gap-[1.4vh] [&_>_div]:w-full [&_>_div]:px-1 [&_input]:py-1 [&_input]:shadow-inner [&_input]:shadow-black/70 [&_input]:w-full justify-stretch items-stretch">
            <InputAdmin label={"Nama:"} functionModifier={setNamaLokasi} value={data.place_name}></InputAdmin>
            <InputAdmin label={"Kategori:"} functionModifier={setKategori}></InputAdmin>
            <InputAdmin label={"Keterangan:"} functionModifier={setDeskripsi}></InputAdmin>
            <InputAdmin label={"Deskripsi Tempat:"} functionModifier={setDeskripsiLokasi} value={data.deskripsi_photo}></InputAdmin>
            <InputAdmin label={"provinsi:"} functionModifier={setProvinsi} value={data.province}></InputAdmin>
            <InputAdmin label={"Kota:"} functionModifier={setKota} value={data.district}></InputAdmin>
            <InputAdmin label={"Kabupaten:"} functionModifier={setKabupaten} value={data.regency}></InputAdmin>
            <InputAdmin label={"Desa:"} functionModifier={setDesa} value={data.village}></InputAdmin>
            <InputAdmin label={"Alamat:"} functionModifier={setAlamat} value={data.addres}></InputAdmin>
            <InputAdmin label={"Latitude:"} functionModifier={setLat} value={data.lat}></InputAdmin>
            <InputAdmin label={"Longitude:"} functionModifier={setLong} value={data.long}></InputAdmin>
          </div>
          <div className="w-full py-[2%]">
            <button type="submit" className="mx-auto float-right bg-kryptonite text-white px-[3%] py-[1.5%] rounded-full"
            >
              Perbaharui
            </button>
          </div>
        </form>
      </main>
      
    </div>
  )
}

export default AdminEdit