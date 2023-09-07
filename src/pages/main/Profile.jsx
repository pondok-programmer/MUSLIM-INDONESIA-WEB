import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/StateContext'
import { BsBookmark, BsBookmarkFill, BsPencilSquare, BsPlusSquareDotted, BsX, BsXCircle } from 'react-icons/bs'
import { instance } from '../../services/api/api'
import { BiBookmark } from 'react-icons/bi'

const Profile = () => {

   const reference = useRef(null)
   const redirect = useNavigate()
   
   const {masjidImage} = useContext(Context)
   const tags = {full_name: "Nama", username: "Username", email:"Email", phone_number:"No. Telpon"}
   
   const [data, setData] = useState({
      "full_name": "nama",
      "username": "username",
      "email": "email@mail.com",
      "photo": " ",
      "phone_number": "00000000000"
   })

   const [marked, setMarked] = useState([])
  
   const [key, setKey] = useState("")
   const [edit, setEdit] = useState(false)
   const [bookmark, setBookmark] = useState(false)

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [userName, setUserName] = useState("")
   const [telepon, setTelepon] = useState("")
   const [preview, setPreview] = useState(null);
   const [defaultPreview, setDefaultPreview] = useState(null);
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
         url: `/read-profile/${localStorage.getItem("username")}`,
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
        localStorage.setItem("name", response.data.users.full_name)
        localStorage.setItem("username", response.data.users.username)
        localStorage.setItem("photo", response.data.users.photo)

        console.log(response)
        setData(response.data?.users) 
        setMarked(response.data?.marked)
        setName(response.data?.users.full_name)
        setEmail(response.data?.users.email)
        setTelepon(response.data?.users.phone_number)
        setPreview(response.data?.users.photo)
        setDefaultPreview(response.data?.users.photo)
        setUserName(response.data?.users.username)

        fetch(response.data?.users.photo).then((photo)=>
        {
         photo.blob().then((final)=>{setImage(final)})
        }) 
      })
      .catch((error)=>
      {
        console.log(error)
      })
     }
   }, [])
   
   let h = Math.max((document.documentElement.clientHeight * 0.672), (window.innerHeight * 0.672) || 0)
  return (
    <div className=' h-full flex flex-col w-full text-white bg-kryptonite min-h-[67.15vh]' >
      <header className='text-center py-3 bg-kryptonite'>
         <div>
            <h1 className='lg:text-[31px] text-[28px] font-bold'>
               Profile
            </h1>
         </div>
      </header>
      <main className='text-black md:pt-[3.5%] flex-1 bg-white md:flex justify-evenly overflow-auto'>
         <div className='h-[160px] md:w-[200px] md:min-h-[260px] md:gap-4 flex flex-col justify-start items-center p-3 md:p-0 pb-0 px-10'>
            <div className=' h-[100%] md:h-max md:px-[0.1%] md:w-full md:p-2 md:gap-1.5 md:bg-zinc-200 rounded-2xl flex flex-col justify-between items-center'>
               <span className={`hidden md:flex font-bold`}>{data.full_name}</span>
               <figure className='overflow-hidden border-4 w-[68%] border-white aspect-square shadow-[0_3px_5px_0px_grey] rounded-2xl'>
                  <img src={preview ? preview : masjidImage} alt="" className='h-full w-full object-cover' />
               </figure>
               <div className='py-[1%]'>
                  <button onClick={(e)=>{pickImage(e)}} className='flex items-center text-white bg-lime-700 shadow-lg border rounded-full px-1.5'>
                     Ubah Foto &#0; <BsPlusSquareDotted className='text-black font-bold'/>
                  </button>
                  <input ref={reference} onChange={(e)=>{imageChangeHandler(e)}} type="file" name="" id="" className='hidden' />
               </div>
            </div>
            <div className='w-full flex justify-center '>
               <button className='flex w-max whitespace-nowrap px-[4%] items-center rounded-2xl shadow-[0_1.5px_3px_2px_black] font-bold ring-2 ring-white border border-black/90 text-black'
               onClick={()=>{setBookmark(!bookmark)}}>
                  My Bookmark <span className='mx-[2.5%] rounded-full'><BsBookmark/></span>
               </button>
            </div>
         </div>
         {!bookmark ? 
         <form action="" onSubmit={(e)=>{handleEdit(e)}} className='md:w-[70%] lg:w-[77%] '>
            {
            Object.entries(tags).map((tag, index)=>{
               return(
                  <div className={`last:pb-1.5 md:[&_>_div]:first:pt-0`} key={index}>
                     <div className='px-3 py-2 md:px-0'>
                        <div className='rounded-2xl bg-white py-1.5 px-2 lg:h-[95px] shadow-[0_2px_5px_1px_grey] lg:flex lg:flex-col lg:justify-evenly'>
                           <div className='flex justify-between'>
                              <label className='pt-1 px-1 font-bold text-[18px]'>{`${tag[1]}`}</label>
                           </div>
                           <div className='p-1 flex justify-between items-center' >
                              <span className={`border border-white ${(key == `${tag[1]}` && edit) && "hidden"}`}>{data[tag[0]]}</span>
                              {tag[1] == "Nama" && 
                              <>
                                 <input id={`input-${tag[1]}`} type="text" className={`outline-0 border rounded-xl border-black min-w-[50%] ${(key == `${(tag[1])}` && edit) ? "" : "hidden"}`} defaultValue={`${name}`} onChange={(e)=>{setName(e.currentTarget.value)}}/>
                                 <button onClick={(e)=>{e.preventDefault();setKey((key)=>{key == tag[1].toString() ? setEdit(!edit) : setEdit(true) ; return (tag[1])})}} className='cursor-pointer'>
                                    {(key == `${(tag[1])}` && edit)? <BsXCircle className='pointer-events-none '/> : <BsPencilSquare className='pointer-events-none'/>}
                                 </button>
                              </> 
                              }
                           </div>
                        </div>
                     </div>            
                  </div>
                  )
               })
            }
            <div className='py-[3%] flex'>
               <button type='submit' onClick={()=>{setEdit(false)}} disabled={(edit) ? false : (preview != defaultPreview) ? false : true} className={`z-20 mx-auto disabled:bg-gray-400/80 disabled:outline-gray-400/80 disabled:text-gray-200 w-[130px] max-w-[160px] max-h-[50px] py-[1%] rounded-full bg-sari font-bold text-kryptonite border-white border-2 outline outline-sari outline-2`}>Simpan</button> 
            </div>
         </form>
         :
         <div className='md:w-[70%] lg:w-[77%] '>
            {marked.map(()=>{
               return(
                  <div key={index} className={`relative !flex flex-col !rounded-2xl overflow-hidden flex-nowrap flex-grow items-end justify-center my-1 px-2 py-2 bg-zinc-300 !aspect-[3/2.2]`}>
                     <div className='flex-[0.12] font-bold w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                        Meneladani Rosul dalam kehidupan
                     </div>
                     <div className='flex-1 flex items-center w-full shrink overflow-hidden rounded-xl'>
                        <figure className='w-full py-0.5'>
                           <img src={masjidImage} alt="" className='w-full object-cover h-[100%]' />
                        </figure>
                     </div>
                     <div className='flex-shrink flex-col items-start justify-between  w-full'>
                        <span className='px-[0.5%] text-ellipsis overflow-hidden whitespace-nowrap'>{element.person}</span>
                        <div className='flex items-center justify-start max-lg:text-[11px] lg:text-[12px] w-full'>
                           <PiCalendar className='mx-[0.8%] text-lime-700 relative bottom-0'/>
                           <p className='text-ellipsis overflow-hidden whitespace-nowrap'> {element.date}</p>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
         }
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