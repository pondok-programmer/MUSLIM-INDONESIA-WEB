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
   variableWidth: true,
   adaptiveHeight: true,
   responsive: [
     {
       breakpoint: 1024,
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
         variableWidth: false,
         arrows: false,
       }
     },
   ],
 };

  return (
    <div>
      <section id='event' className='py-[6%] sm:py-[4%] lg:py-[1%] flex flex-col max-sm:justify-center [] bg-white'>
         {events.map((acara, index)=>{
         return(
            <div key={index} className='w-full py-1.5'>
               <h1 className='font-bold text-[19px] sm:text-[23px] text-left w-full px-5'>{acara}</h1>
               <div className='px-2 [&_.slick-track]:gap-[2vw] relative max-sm:before:absolute before:-right-1 before:-translate-y-[50%] before:top-1/2 before:h-[97%] before:w-[11%] before:backdrop-blur-[2px] before:z-10 before:pointer-events-none'>
               <Slider {...settings}>
                  {
                     kajian.map((element, index)=>{
                     return(
                        <div key={index} className={`relative h-[260px] lg:h-[260px] !flex flex-col !rounded-2xl overflow-hidden items-end justify-end my-1`}>
                           <div className='flex-1 sm:w-full flex justify-center overflow-hidden'>
                              <img src={masjidImage} alt="" className='w-full h-full object-cover'/>
                           </div>
                           <div className='bg-neutral-300 flex justify-between items-center p-[1vw] sm:px-[3%] lg:p-2 w-full sm:text-[2vw] lg:text-[1.4vw] h-[19%] text-ellipsis'>
                              <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{element.person}</p>
                              <div className='flex items-center justify-end w-1/2 lg:text-[1.2vw]'>
                                 <PiCalendar className='mx-[3%] text-lime-700 relative bottom-0'/>
                                 <p className='text-ellipsis overflow-hidden whitespace-nowrap'> {element.date}</p>
                              </div>
                           </div>
                        </div>
                     )
                     })
                  }
               </Slider>
               </div>
               {/* <div className='bg-black bg-opacity-5 gap-[1vw] lg:[&_.slick-list]:!h-max lg:[&_.slick-track]:!w-max lg:[&_.slick-track]:!m-auto [&_.slick-track]:!w-max [&_.slick-track]:!m-auto [&_.slick-track]:!gap-[1vw] lg:[&_.slick-track]:!gap-[3vw]'>
               <Slider {...settings}>
                  {
                     kajian.map((element, index)=>{
                     return(
                        <div key={index} className={`!aspect-[3.9/3] lg:!min-w-[270px] !w-[45vw] max-sm:!py-0.5 text-[13px] sm:text-[1.5vw] lg:text-[15px] !flex flex-col !rounded-lg overflow-hidden items-end justify-end my-1`}>
                           <div className='flex-1 w-full h-12 flex justify-center overflow-hidden '>
                           <img src={masjidImage} alt="" className='w-full h-full'/>
                           </div>
                           <div className='bg-neutral-300 flex justify-between items-center p-[1vw] lg:p-2 w-full sm:text-[1.3vw] lg:text-[1.1vw] h-[19%] text-ellipsis'>
                           <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{element.person}</p>
                           <div className='flex items-center justify-end w-1/2 lg:text-[0.9vw]'>
                              <PiCalendar className='mx-[3%] text-lime-700 relative bottom-0'/>
                              <p className='text-ellipsis overflow-hidden whitespace-nowrap'> {element.date}</p>
                           </div>
                           </div>
                        </div>
                     )
                     })
                  }
               </Slider>
               </div> */}
            </div>
         )
         })}
      </section>
      
    </div>
  )
}

export default Events