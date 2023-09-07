import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context/StateContext'

const OTP = () => {
   const navigate = useNavigate()
  
   const {masjidSource} = useContext(Context)
 
   return (
     <div className='h-screen max-h-full flex flex-col w-full py-14 text-white bg-kryptonite'>
       <div className='px-6 sm:px-12 flex flex-col w-full h-[80%] md:m-auto md:w-[80%] lg:w-[70%] max-w-3xl'>
         <header className='max-sm:py-3 sm:py-5 text-center h-[18rem] md:h-max flex flex-col justify-end'>
            <div className='md:py-4'>
               <h1 className='text-[34px] font-bold leading-tight'>Confirm <span className='text-sari'>OTP</span> Code</h1>
            </div>
         </header>
         <main className='md:px-8 md:py-6 md:border-2 md:border-white md:rounded-xl'>
            <div className='py-3 text-[15px]'>
               <p>An OTP code has been sent to your email, enter the code below to confirm your password reset request</p>
            </div>
            <form className='[&_>_div]:py-2'>
            <div className=' text-black before: '>
               <input type="text" className='w-full m-auto h-9 rounded-xl tracking-[2rem] text-center focus-visible:outline-none  border-2 border-lime-500' defaultValue={"123456"} />
               <div className='flex justify-center gap-6 [&_hr]:w-[28px]'>

               </div>
            </div>
            <div className='flex justify-center'>
               <Link to={"/forgot-password/reset"} className='w-[34%]'>
                  <input type="submit" value="Submit" className='rounded-full w-full font-bold via-lime-600 from-lime-400 bg-gradient-to-tr to-lime-700 py-2'/>
               </Link>
            </div>
            </form>
         </main>
       </div>
     </div>
   )
}

export default OTP