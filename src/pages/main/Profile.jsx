import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/StateContext'
import { BsPencilSquare, BsX, BsXCircle } from 'react-icons/bs'
import { PiCross, PiX, PiXBold } from 'react-icons/pi'

const Profile = () => {

   const {masjidImage} = useContext(Context)
   const redirect = useNavigate()
   
   const tags = [{Nama:"Roihan Faiz"}, {Email:"Faiz@gmail.com"}, {Telepon:"081249481"}] 
   const [key, setKey] = useState("")
   const [edit, setEdit] = useState(false)

   const [name, setName] = useState("")
   // const [email, setEmail] = useState("")
   // const [nomor, setNomor] = useState("")

   const handleEdit = (e) => {
     e.preventDefault()
 
     let data = new FormData();
     data.append('full_name', name);
   //   data.append('email', email);
   //   data.append('phone_number', nomor);

     let config = {
       method: 'post',
       maxBodyLength: Infinity,
       url: `/edit-profile/${""}`,
       data : data
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

  return (
    <div className='min-h-[calc(68vh-0.6rem)] h-full flex flex-col w-full text-white bg-kryptonite'>
      <header className='text-center py-3 bg-kryptonite'>
         <div>
            <h1 className='text-[31px] font-bold'>
               Profile
            </h1>
         </div>
      </header>
      <main className='text-black bg-white min-h-[55vh]'>
         {tags.map((data, index)=>{
            return(
            <div className='first:pt-1.5' key={index}>
               <div className='px-3 py-2 '>
                  <div className='rounded-2xl bg-white py-1.5 px-2 shadow-[0_2px_5px_1px_grey] '>
                     <div className='flex justify-between'>
                        <h2 className='pt-1 px-1 font-bold text-[18px]'>{`${Object.keys(data)}`}</h2>
                     </div>
                     <form className='p-1 flex justify-between items-center disabled:disabl' >
                        <span className={`border border-white ${(key == `${(Object.keys(data))}` && edit) && "hidden"}`}>{Object.values(data)}</span>
                        <input id={`input-${Object.keys(data)}`} type="text" className={`outline-0 border rounded-xl border-black ${(key == `${(Object.keys(data))}` && edit) ? "" : "hidden"}`} defaultValue={`${Object.values(data)}`} autoFocus={true}/>
                        <span onClick={(e)=>{setKey((key)=>{console.log(key == Object.keys(data).toString()); key == Object.keys(data).toString() ? setEdit(!edit) : setEdit(true) ; return (Object.keys(data))});console.log(document.getElementById(`input-${Object.keys(data)}`));}} className='cursor-pointer'>{(key == `${(Object.keys(data))}` && edit)? <BsXCircle className='pointer-events-none '/> : <BsPencilSquare className='pointer-events-none'/>}</span>
                        <button className={`${!edit && "hidden"} fixed bottom-[30%] right-1/2 translate-x-1/2 w-[130px] max-w-[160px] py-[1.5%] rounded-full bg-sari font-bold text-kryptonite border-white border-2 outline outline-sari outline-2`}>Simpan</button>
                     </form>
                  </div>
               </div>            
            </div>
               )
         })}
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