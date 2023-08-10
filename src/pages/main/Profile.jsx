import React from 'react'

const Profile = () => {

   const tags = ["Nama", "Email", "No. Telepom"] 

  return (
    <div className='min-h-[calc(68vh-0.6rem)] h-full flex flex-col w-full md:py-14 text-white bg-kryptonite'>
      <header className='text-center py-4'>
         <div>
            <h1 className='text-[30px] font-bold'>
               Profile
            </h1>
         </div>
      </header>
      <main className='bg-white text-black'>
         <div className='px-7 [&_dd]:px-3'>
            <dl className='py-4 [&_>_div]:py-1'>
               {tags.map((tag)=>{
                  return(
                     <div>
                        <div>
                        <dt className='text-[20px] font-bold'>{tag}</dt>
                        </div>
                        <dd>Istiklal</dd>
                     </div>
                  )
               })}
            </dl>
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