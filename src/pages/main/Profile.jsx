import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/StateContext'

const Profile = () => {

   const tags = ["Nama", "Email", "No. Telepom"] 

   const redirect = useNavigate()
   const {masjidImage} = useContext(Context)

   const handleEdit = (e) => {
     e.preventDefault()
 
     let data = new FormData();
     data.append('email', email);
 
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
    <div className='min-h-[calc(68vh-0.6rem)] h-full flex flex-col w-full md:py-14 text-white '>
      <header className='text-center py-4 bg-kryptonite'>
         <div>
            <h1 className='text-[31px] font-bold'>
               Profile
            </h1>
         </div>
      </header>
      <main className='bg-white text-black'>
         <section className='p-3'>
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
         </section>
         <div className='px-7 [&_dd]:px-3'>
         </div>
      </main>
      <section>
         <div className=''>

         </div>
      </section>
    </div>
  )
}

export default Profile