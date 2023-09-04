import React, {useContext} from 'react'
import { PiCalendar } from 'react-icons/pi'
import Slider from 'react-slick/lib/slider'
import { Context } from '../../context/StateContext'

const Events = () => {
   
   const {masjidImage} = useContext(Context)
   const events = ["Kajian", "Event", "TPQ"]

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

 const settings = {
   dots: false,
   infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 3,
   arrows: true,
   accessibility: true,
   // variableWidth: true,
   adaptiveHeight: true,
   responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          accessibility: true,
          adaptiveHeight: true,
          variableWidth: true,
          arrows: false,
        }
      },
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         accessibility: true,
         variableWidth: false,
         arrows: false,
         infinite: false,
         dots: false
       }
     },
     {
       breakpoint: 955,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         accessibility: true,
         variableWidth: false,
         arrows: false,
         infinite: false,
         dots: false
       }
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         accessibility: true,
         adaptiveHeight: true,
         variableWidth: true,
         arrows: false,
       }
     },
   ],
 };

  return (
    <div>
      <header className='text-center py-3 bg-kryptonite'>
         <div>
            <h1 className='text-[31px] text-white font-bold'>
               Events
            </h1>
         </div>
      </header>
      <section id='event' className='py-[4%] sm:py-[4%] lg:py-[1%] flex flex-col max-sm:justify-center [] bg-white'>
         {events.map((acara, index)=>{
         return(
            <div key={index} className='w-full py-1.5'>
               <h1 className='font-bold text-[19px] sm:text-[23px] text-left w-full px-5'>{acara}</h1>
               <div className='px-2 [&_.slick-track]:gap-[2vw] relative max-sm:before:absolute before:-right-1 before:-translate-y-[50%] before:top-1/2 before:h-[97%] before:w-[11%] before:backdrop-blur-[2px] before:z-10 before:pointer-events-none'>
               <Slider {...settings}>
                  {
                     kajian.map((element, index)=>{
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
                     })
                  }
               </Slider>
               </div>
            </div>
         )
         })}
      </section>
      
    </div>
  )
}

export default Events