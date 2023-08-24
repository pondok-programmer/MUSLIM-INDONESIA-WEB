import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/StateContext'
import { BsDash, BsDashSquare, BsDashSquareDotted, BsPencilSquare, BsPlusSquareDotted, BsX, BsXCircle } from 'react-icons/bs'
import { PiCross, PiX, PiXBold } from 'react-icons/pi'
import { instance } from '../../services/api/api'

const Profile = () => {

   const {masjidImage} = useContext(Context)
   const reference = useRef(null)
   const redirect = useNavigate()
   const tags = {full_name: "Nama", username: "Username", email:"Email", phone_number:"No. Telpon"}
   
    const [data, setData] = useState({
      "full_name": "nama",
      "username": "username",
      "email": "email@mail.com",
      "photo": " ",
      "phone_number": "00000000000"
  })
  
   const [key, setKey] = useState("")
   const [edit, setEdit] = useState(false)

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [userName, setUserName] = useState("")
   const [telepon, setTelepon] = useState("")
   const [preview, setPreview] = useState(null);
   const [image, setImage] = useState(null);

   const kajian = [
      {
        image:masjidImage,
        person:"kholid basalamah",
        date: Date(20203,7,3).substring(0,16)
      },
      {
        image:masjidImage,
        person:"kholid basalamah",
        date: Date(20203,7,3).substring(0,16)
      },
      {
        image:masjidImage,
        person:"kholid basalamah",
        date: Date(20203,7,3).substring(0,16)
      },
      {
        image:masjidImage,
        person:"kholid basalamah",
        date: Date(20203,7,3).substring(0,16)
      },
    ]
   // const [email, setEmail] = useState("")
   // const [nomor, setNomor] = useState("")
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
 
     let data = new FormData();
     data.append('full_name', name);
     data.append('photo', image);

     let config = {
       method: 'post',
       maxBodyLength: Infinity,
       url: `/edit-profile/${"rafi"}`,
       data : data
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
       redirect("/home")
     })
     .catch((y)=>
     {
       redirect("/home")
       console.log(y)
     })
   }

   useEffect(() => {
   
     return () => {
      let config = {
         method: 'post',
         maxBodyLength: Infinity,
         url: `/read-profile/faiz123`,
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
         // headers: {
         //    Authorization: `Bearer ${localStorage.getItem("token")}`
         //  },
       };

      instance
      .request(config)
      .then((response)=>
      {
        console.log(response)
        setData(response.data?.users) 
        setName(response.data?.users.full_name)
        setEmail(response.data?.users.email)
        setTelepon(response.data?.users.phone_number)
        setPreview(response.data?.users.photo)
        setUserName(response.data?.users.username)

        fetch(response.data?.users.photo).then((result)=>
        {
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
    <div className=' h-full flex flex-col w-full text-white bg-kryptonite'>
      <header className='text-center py-3 bg-kryptonite'>
         <div>
            <h1 className='lg:text-[31px] text-[28px] font-bold'>
               Profile
            </h1>
         </div>
      </header>
      <main className='text-black bg-white h-[calc(60vh-0.9rem)] overflow-auto'>
         <div className='hidden lg:relative'>
            <div className=' w-full bg-gray-500 py-4'>
               <div className='w-full flex flex-col items-center justify-evenly bg-orange-600 h-[160px] '>
                  <figure className=' rounded-lg h-[80%] aspect-square overflow-hidden'>
                     <img src={masjidImage} alt="" className='h-full w-full object-cover'/>
                  </figure>
                  <span>Roihan Faiz</span>
               </div>
               <div className='flex flex-col items-center bg-pink-500 justify-evenly '>
                  <span>Email</span>
                  <span>0816481921</span>
               </div>
               <div>
                  <button></button>
               </div>
            </div>
            <div className='bg-rose-400'>
               <div className='mx-auto w-max flex flex-wrap gap-4'>
               {kajian.map((data, index)=>{
                  return(
                     <div className='h-[100px] w-[200px]' key={index}>

                     </div>
                  )
               })}
               </div>
            </div>
         </div>
         <div className='h-[160px] flex justify-center items-center p-3 pb-0'>
            <div className=' h-full w-[100%] rounded-2xl flex flex-col gap-[3%] justify-between items-center'>
               <figure className='overflow-hidden border-4 border-white h-full aspect-square shadow-[0_3px_5px_0px_grey] rounded-2xl'>
                  <img src={preview} alt="" className='h-full w-full object-cover' />
               </figure>
               <div className='py-[1%]'>
                  <button onClick={(e)=>{pickImage(e)}} className='flex items-center text-white bg-lime-700 shadow-lg border rounded-full px-1.5'>
                     Ubah Foto &#0; <BsPlusSquareDotted className='text-black font-bold'/>
                  </button>
                  <input ref={reference} onChange={(e)=>{imageChangeHandler(e)}} type="file" name="" id="" className='hidden' />
               </div>
            </div>
         </div>
         <form action="" onSubmit={(e)=>{handleEdit(e)}}>
            {
               Object.entries(tags).map((tag, index)=>{
                  return(
                     <div className=' last:pb-1.5 lg:last:p-0 md:hidden' key={index}>
                        <div className='px-3 py-2 lg:py-1 lg:px-0'>
                           <div className='rounded-2xl bg-white py-1.5 px-2 shadow-[0_2px_5px_1px_grey] lg:shadow-none'>
                              <div className='flex justify-between'>
                                 <label className='pt-1 px-1 font-bold text-[18px]'>{`${tag[1]}`}</label>
                              </div>
                              <div className='p-1 flex justify-between items-center' >
                                 <span className={`border border-white ${(key == `${tag[1]}` && edit) && "hidden"}`}>{data[tag[0]]}</span>
                                 {tag[1] == "Nama" && <>
                                 <input id={`input-${tag[1]}`} type="text" className={`outline-0 border rounded-xl border-black min-w-[50%] ${(key == `${(tag[1])}` && edit) ? "" : "hidden"}`} defaultValue={`${name}`} autoFocus={true}/>
                                 <button onClick={(e)=>{e.preventDefault();setKey((key)=>{key == tag[1].toString() ? setEdit(!edit) : setEdit(true) ; return (tag[1])})}} className='cursor-pointer'>{(key == `${(tag[1])}` && edit)? <BsXCircle className='pointer-events-none '/> : <BsPencilSquare className='pointer-events-none'/>}</button>
                                 </> 
                                 }
                              </div>
                           </div>
                        </div>            
                     </div>
                        )
               })
            }
            <button type='submit' className={`${!edit && "hidden"} fixed bottom-[14%] z-20 right-1/2 translate-x-1/2 w-[130px] max-w-[160px] py-[1.5%] rounded-full bg-sari font-bold text-kryptonite border-white border-2 outline outline-sari outline-2`}>Simpan</button>
         </form>
         {/* <section className='p-3 bg-red-600'>
            <div className='m-auto h-[120px] w-[90vw] flex overflow-hidden items-center rounded-3xl bg-kryptonite'>
            <div className='w-[30%] h-full flex items-center p-2'>
            <figure className='rounded-full overflow-hidden aspect-square'>
            <img src={masjidImage} alt="" className='h-full w-full object-cover' />
            </figure>
            </div>
               <dl className='flex flex-col w-[70%] p-2'>
                  {tags.map((tag, index)=>{
                     return(
                        <div key={index} className='flex items-center'>
                        <div className='w-[50%] flex justify-between font-bold'>
                        <dt className='text-[17px] text-black '>{tag}</dt>
                              <span> :</span>
                           </div>
                           <dd className='text-white px-2'>Istiklal</dd>
                        </div>
                     )
                  })}
               </dl>
            </div>
         </section> */}
      </main>
    </div>
  )
}

export default Profile