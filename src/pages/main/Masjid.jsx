import React, {useEffect, useState} from 'react'
import masjidImage from "../../assets/example/masjid.png"

const Masjid = () => {
   let cards = [
      {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    },
    {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    },
    {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    }
  ]

  {[...Array(2)].map(()=>{cards.push(...cards)})}
  
  return (
    <div className='lg:min-h-[67.6vh] h-auto bg-gray-400 flex flex-col w-full'>
      <header className='flex justify-center items-center lg:h-[10vh] bg-red-600'>
         <h1 className='text-[30px] font-bold'>Masjid</h1>
      </header>
      <main className='bg-pink-500 w-full px-3 lg:px-7'>
         <div className='w-full grid py-2 gap-3 lg:gap-6 justify-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {cards.map((element)=>{
               return(
               <div className='aspect-[4/2.5] rounded-xl '>
                  <img src={element.image} alt="" className='h-full w-full'/>
                </div>
               )
            })}
         </div>
      </main>
    </div>
  )
}

export default Masjid