import { CiLock, CiUser, CiMail, CiPhone } from 'react-icons/ci'
import { PiPhoneLight, PiLock, PiLockKeyLight, PiLockKeyFill, PiLockFill }  from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/StateContext'
import { registerAPI } from '../../services/instances'
import { instance } from '../../services/api/api'

const SignUp = () => {
  // const {masjidSource, email, password, passwordConfirm, nomor, name, setEmail, setPassword, setPasswordConfirm, setNomor, setName} = useContext(Context)
  const {masjidSource} = useContext(Context)
  const redirect = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [nomor, setNomor] = useState("")
  
  
  const handleRegister = (e) => {
    e.preventDefault()
    let userName = email.split("@")[0]

    let data = new FormData();
    data.append('full_name', name);
    data.append('email', email);
    data.append('username', userName);
    data.append('password', password);
    data.append('password_confirmation', passwordConfirm);
    data.append('phone_number', nomor);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `register`,
      data : data,
    };

    instance
    .request(config)
    .then((response)=>
    {
      console.log(response)
      // redirect("/")
    })
    .catch((error)=>
    {
      // redirect("/")
      console.log(error)
    })
  }

  return (
    <div className='min-h-screen h-screen flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex h-full w-full flex-col items-center [&_input]:placeholder:text-white sm:gap-1 lg:flex-row lg:gap-0'>
        <section className='w-full h-[21vh] flex items-center justify-center sm:h-[28vh] lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 sm:flex-col sm:gap-0 lg:flex-col-reverse'>
            <img src={masjidSource} alt="Your Logo" className='h-[18vh] aspect-square lg:h-[35vh]' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8 sm:leading-tight lg:leading-snug lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] sm:w-[70%] lg:w-[50%] lg:p-[2%] lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className='lg:border-white lg:border lg:min-h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md w-full '>
            <div className='flex justify-center items-center lg:py-[3%]'>
              <h1 className='text-[5.3vh] sm:text-[37px] font-[700] text-sari'>Register</h1> 
            </div>
            <form onSubmit={(e)=>{handleRegister(e)}} className='flex flex-col justify-around gap-8 lg:gap-2 lg:flex-1 lg:px-7 lg:text-[14px]' autoComplete={toString("on")}>
              <div className='flex flex-col sm:gap-5 [&_>_div]:!pt-[3%] lg:[&_>_div]:!pt-0 lg:gap-0 [&_input]:px-1 max-lg:[&_>_div]:pt-3 max-lg:[&_input]:pb-1 max-lg:[&_input]:pt-0 [&_input]:text-[19px] [&_>_div]:mt-1.5 '>
                <div className={`border-b-[1.7px] pt-2 border-[#fff]`} onFocus={(e)=>{console.log(e.target)}}>
                  <input type={'text'} autoComplete='on' placeholder='Nama' className={`flex items-center sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none bg-kryptonite w-full sm:w-[93%] pb-2 px-3 pt-2 `} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className={`border-b-[1.7px] pt-2 border-[#fff]`} onFocus={(e)=>{console.log(e.target)}}>
                  <input type={'email'} autoComplete='email' placeholder='Email' className={`sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none bg-kryptonite w-full sm:w-[93%] pb-2 px-3 pt-2 `} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className={`border-b-[1.7px] pt-2 border-[#fff]`} onFocus={(e)=>{console.log(e.target)}}>
                  <input type={'tel'} autoComplete='on' placeholder='No. telepon' className={`sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none bg-kryptonite w-full sm:w-[93%] pb-2 px-3 pt-2 `} onChange={(e)=>{setNomor(e.target.value)}}/>
                </div>
                <div className={`border-b-[1.7px] pt-2 border-[#fff]`} onFocus={(e)=>{console.log(e.target)}}>
                  <input type={'password'} autoComplete='on' placeholder='Password' className={`sm:text-[26px] text-[2.3vh] focus:ring-0 border-none bg-kryptonite outline-none w-full sm:w-[93%] pb-2 px-3 pt-2`} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className={`border-b-[1.7px] pt-2 border-[#fff]`} onFocus={(e)=>{console.log(e.target)}}>
                  <input type={'password'} autoComplete='on' placeholder='Konfirmasi Password' className={`sm:text-[26px] text-[2.3vh] focus:ring-0 border-none bg-kryptonite outline-none w-full sm:w-[93%] pb-2 px-3 pt-2`} onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
                </div>
                {/* <InputCustom placeholder={'Nama Pengguna'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 !pt-0 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setName(e.target.value)}}/> */}
                {/* <InputCustom placeholder={'User Name'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} /> */}
                {/* <InputCustom type='tel' placeholder={'No. Telepon'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setNomor(e.target.value)}}/> */}
                {/* <InputCustom type='email' placeholder={'Email'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setEmail(e.target.value)}}/> */}
                {/* <InputCustom type='password' placeholder={'Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setPassword(e.target.value)}}/> */}
                {/* <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setPasswordConfirm(e.target.value)}}/> */}
              </div>
              <div className='w-full flex flex-col items-center gap-0.5 sm:gap-0 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%] sm:[&_button]:w-[55%]'>
                <input type="submit" value="Register" className='w-[55%] bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] text-white font-[700] py-[4%] sm:text-[16px] cursor-pointer' autoComplete='on'/>
                <h4 className='font-bold max-h-min'>or</h4>
                <div className='flex text-sari items-center justify-center'>
                  <h4>Register with</h4>
                  <img src={googleIcon} alt="" className='px-2'/>
                </div>
              </div>
            </form>
            <div className=' px-4 pt-0.5 text-[15px] hidden w-full font-bold justify-between h-[5vh] items-center lg:flex'>
              <div className=''>Already have an Account? <Link to={"/"} className='text-sari font-bold'>Login</Link></div>
            </div>
          </div>
          <button className='hidden lg:flex'>
            <img src={googlePlayButton} alt="" />
          </button>
        </section>
      </main>
      <footer className='px-4 pt-0.5 text-[15px] w-full flex font-bold justify-between h-[5vh] lg:hidden'>
        <div className=''>Already have an Account? <Link to={"/"} className='text-sari font-bold'>Login</Link></div>
      </footer>
    </div>
  )
}

export default SignUp