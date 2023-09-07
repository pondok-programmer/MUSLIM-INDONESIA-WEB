import React, {useState} from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const InputLogin = ({type, modifierFunction, text}) => {
  const [isShow, setIsShow] = useState(false)

   if (type == "password") {
      return(
      <div className={`flex relative items-center border-b-[1.7px] px-1 border-[#fff]`}>
         <input type={'password'} placeholder=' ' autoComplete='on' className={`max-lg:text-[23px] text-[2.3vh] lg:text-[22px] peer duration-300 focus:ring-0 border-none outline-none w-full px-1 pr-1.5 pb-2 lg:pb-1 lg:pt-1 lg:pl-0 pt-2 bg-transparent text-[#fff]`} onChange={(e)=>{modifierFunction(e.target.value)}}/>
         <label className={`absolute top-[17.4%] duration-300 px-1 lg:px-0 pointer-events-none max-sm:text-[12px] text-[12px] lg:text-[12.5px] translate-y-[-95%] peer-focus:translate-y-[-95%] lg:peer-focus:text-[12.5px] peer-focus:text-[12px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[23px]`}>Kata Sandi</label>
         <div onClick={(e)=>{setIsShow(!isShow);(isShow ? e.currentTarget.previousSibling.setAttribute("type", "password") : e.currentTarget.previousSibling.setAttribute("type", "text"))}}>
            {isShow ? <BsEyeSlashFill className='text-2xl md:text-[25px] lg:text-xl text-[#fff] cursor-pointer' /> : <BsEyeFill  className='text-2xl md:text-[25px] lg:text-xl text-[#fff] cursor-pointer'/>}
         </div>
      </div>
      )
   } else {
      return (
      <div id='login-email-container' className={`flex  relative items-center border-b-[1.7px] px-1 border-[#fff]`}> 
         <input type={type} placeholder=' ' autoComplete='email' className={`max-lg:text-[23px] text-[2.3vh] lg:text-[22px] peer duration-300 focus:ring-0 border-none outline-none w-full px-1 pr-1.5 pb-2 lg:pb-1 lg:pt-1 lg:pl-0 pt-2 bg-transparent text-[#fff] `} onChange={(e)=>{modifierFunction(e.target.value)}}/>
         <label className={`absolute top-[17.4%] duration-300 px-1 lg:px-0 pointer-events-none max-sm:text-[12px] text-[12px] lg:text-[12.5px] translate-y-[-95%] peer-focus:translate-y-[-95%] peer-focus:text-[12px] lg:peer-focus:text-[12.5px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[23px] after:absolute after:text-[10px] lg:after:text-[10px] after:font-bold after:bottom-0.5 after:duration-100 after:opacity-0 peer-invalid:after:opacity-90 after:text-red-600 after:whitespace-nowrap peer-invalid:after:content-["(Email_yang_anda_masukkan_tidak_valid!)"]`}>{text} &#0; &#0; </label>
      </div>
      )
   }
}

export default InputLogin