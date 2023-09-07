import { useState } from 'react'
import { BsEyeSlash, BsEye, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const InputCustom = ({type = 'text',placeholder,id,className,classNameDiv,icon}) => {
  const [isShow, setIsShow] = useState(false)
  const showError = false
  return (
    <div>
        { type === 'password' ? <>
        <div className={`flex items-center ${classNameDiv}`}>{icon}
          <input type={isShow ? 'text' : 'password'} placeholder={placeholder} className={`${className} bg-transparent text-[#fff]`} />
          {isShow ? <BsEyeSlashFill  className='text-2xl md:text-[25px] text-[#fff] cursor-pointer' onClick={()=>setIsShow(!isShow)}/> : <BsEyeFill  className='text-2xl md:text-[25px] text-[#fff] cursor-pointer' onClick={()=>setIsShow(!isShow)}/>}
        </div>
        {showError && <p className='text-red-700'>password not match!</p>}
        </> 
        : <div className={`flex ${classNameDiv} items-center`}>{icon}<input type={type} id={id} placeholder={placeholder} className={`${className} bg-transparent text-[#fff]`} /></div>}
    </div>
  )
}

export default InputCustom