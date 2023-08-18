import React, { useContext } from 'react'
import { Context } from '../../context/StateContext'

const About = () => {

   const {masjidImage} = useContext(Context)

  return (
    <div>
      <section id='about' className='sm:min-h-[144vh] lg:py-[2%] flex flex-col items-center justify-start text-center bg-white'>
         <article id='About-article' className={` sm:h-[20vh] p-3.5 sm:py-[1.7%] lg:h-[15%] flex flex-col min-h-[${document.getElementById("About-article")?.nextElementSibling.clientHeight}px] `}>
            <h1 className='text-[24px] sm:text-[27px] sm:py-[0.6%] lg:text-[38px] text-kryptonite font-bold'>About Us</h1>
            <p className='flex-1 lg:py-[2%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium odit nemo accusantium, odio a?</p>  
         </article>
         <article className='p-3.5 sm:h-max lg:h-[15%] flex flex-col bg-zinc-200'>
            <h2 className='text-[23px] sm:text-[24px] lg:text-[33px] text-kryptonite'>Motivasi</h2>
            <p className='sm:py-[1%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos animi dicta blanditiis aspernatur impedit reiciendis a sit. Atque nemo, perspiciatis dolorum id animi dolorem eveniet hic adipisci quas. Officia dicta optio cupiditate odit dolorum omnis sequi modi, architecto, tempore placeat ipsum quis maiores commodi porro nobis voluptatum adipisci recusandae!</p>
         </article>
         <div className='p-10 sm:min-h-[51vh] lg:min-h-[26%] w-full flex sm:justify-evenly max-sm:flex-col max-sm:gap-10 sm:py-9 px-12 sm:px-0 lg:justify-evenly lg:px-8 lg:py-10 '>
         {
            [...Array(2)].map((x, index)=>{
               return(
               // <section className='flex-col sm:aspect-[4/4.7] sm:h-[43vh] lg:max-w-[43vw] bg-red-600 lg:aspect-[3/1] flex lg:flex-row'>
               <section key={index} className='flex-col rounded-2xl sm:aspect-[4/4.7] sm:max-h-[42vh] sm:max-w-[44vw] lg:max-h-[38vh] lg:max-w-[44vw] lg:w-full overflow-hidden flex lg:flex-row'>
                  <div className='flex-1 overflow-hidden'>
                     <img src={masjidImage} alt="" className='h-full w-full object-cover'/>
                  </div>
                  <article className='p-3 h-[90%] sm:max-h-[55%] sm:p-4 sm:w-full lg:w-[40%] lg:max-h-none lg:h-full flex flex-col bg-zinc-200 '>
                     <h2 className='text-kryptonite text-[18px] sm:text-[20px] lg:text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
                     <p className='flex-1 max-lg:text-[15px] lg:text-[2.2vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
                  </article>
               </section>
               )
            })
         }
         {/* <section className='h-[29vh] aspect-[2.5/1] flex'>
            <div className='flex-1'>
               <img src={masjidImage} alt="" className='h-full'/>
            </div>
            <article className='w-[40%] flex flex-col bg-zinc-200 rounded-md'>
               <h2 className='text-kryptonite text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
               <p className='flex-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
            </article>
         </section> */}
         </div>
         <article className='flex flex-col p-3.5 sm:py-0 items-center justify-center text-center lg:h-[100px]'>
            <h3 className='text-kryptonite text-[24px] sm:text-[25px]'>Prinsip</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquid at quas sint libero maxime. Dolores numquam aliquam non exercitationem ut similique natus accusantium dolorem pariatur sit, deserunt in dolore fuga? Voluptatem pariatur at amet, fuga esse soluta voluptates eligendi?</p>
         </article>
      </section>
    </div>
  )
}

export default About