import { CiLock, CiUser, CiMail, CiPhone } from 'react-icons/ci'
import { PiPhoneLight, PiLock, PiLockKeyLight, PiLockKeyFill, PiLockFill }  from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/StateContext'
import { instance } from '../../services/api/api'
import InputRegister from '../../components/ui/InputRegister'
import { CgLoadbarAlt } from 'react-icons/cg'
import { BiLoaderAlt } from 'react-icons/bi'

const SignUp = () => {
  // const {masjidSource, email, password, passwordConfirm, nomor, name, setEmail, setPassword, setPasswordConfirm, setNomor, setName} = useContext(Context)
  const {masjidSource} = useContext(Context)
  const redirect = useNavigate()

  const [responseText, setResponseText] = useState("")
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [nomor, setNomor] = useState("")
  
  const handleRegister = (e) => {
    setLoading(true)
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
      setLoading(false)
      setResponseText("Register Berhasil")
      redirect("/")
    })
    .catch((error)=>
    {
      setLoading(false)
      setResponseText("Register gagal")
      console.log(error)
    })
  }

  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  return (
    <div className='min-h-screen lg:h-screen h-full flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex flex-1 h-full w-full flex-col items-center [&_input]:placeholder:text-white sm:gap-1 lg:flex-row lg:gap-0'>
        <section className='w-full flex items-center justify-center sm:h-full lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 sm:flex-col sm:gap-0 lg:flex-col-reverse'>
            <img src={masjidSource} alt="Your Logo" className='h-[140px] sm:h-[170px] aspect-square lg:h-[35vh]' />
            <h1 className='text-[30px] sm:text-[36px] max-w-min text-center font-medium flex-wrap  lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-full lg:w-[50%] lg:p-[2%] h-[70%] flex-1 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className={`lg:border-white lg:border-2 w-[80%] sm:w-[75%] lg:border-opacity-75 lg:min-h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md flex flex-col`} style={{minHeight:`${h*(0.6)}px`}}>
            <div className='flex justify-center flex-[0.3] items-center max-lg:pb-[1%] lg:h-[18%]'>
              <h1 className='text-[32px] sm:text-[37px] font-[700] relative top-[12%] text-sari'>Register</h1> 
            </div>
            <form onSubmit={(e)=>{handleRegister(e)}} className='flex flex-col justify-between gap-8 sm:gap-0  sm:flex-[0.4] lg:gap-0 lg:flex-1 lg:text-[14px] lg:px-10 ' autoComplete={toString("on")}>
              <div className=' flex flex-col gap-2 sm:gap-5 [&_>_div]:!pt-[3%] lg:[&_>_div]:!pt-0 lg:gap-0 [&_input]:px-1 max-lg:[&_>_div]:pt-3 max-lg:[&_input]:pb-1 max-lg:[&_input]:pt-0 [&_input]:!text-[19px] [&_>_div]:mt-1.5 overflow-auto lg:h-[68%] justify-evenly'>
                <InputRegister type={"text"} modifierFunction={setName} text={"Nama"}/>
                <InputRegister type={"email"} modifierFunction={setEmail} text={"Email"}/>
                <InputRegister type={"tel"} modifierFunction={setNomor} text={"No. Telepon"}/>
                <InputRegister type={"password"} modifierFunction={setPassword} text={"Password"}/>
                <InputRegister type={"password"} modifierFunction={setPasswordConfirm} text={"Konfirm Password"}/>
                {/* <InputCustom placeholder={'Nama Pengguna'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 !pt-0 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setName(e.target.value)}}/> */}
                {/* <InputCustom placeholder={'User Name'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} /> */}
                {/* <InputCustom type='tel' placeholder={'No. Telepon'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setNomor(e.target.value)}}/> */}
                {/* <InputCustom type='email' placeholder={'Email'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setEmail(e.target.value)}}/> */}
                {/* <InputCustom type='password' placeholder={'Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setPassword(e.target.value)}}/> */}
                {/* <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} onChange={(e)=>{setPasswordConfirm(e.target.value)}}/> */}
              </div>
              <div className='w-full relative flex flex-col items-center gap-0.5 sm:gap-0.5 lg:gap-0 [&_button]:rounded-3xl max-lg:py-[2%] lg:h-[25%]'>
                <span className='absolute -top-[18%] left-1/2 text-xs w-max overflow-visible text-sari -translate-x-1/2'>{responseText}</span>
                <button type="submit" className='w-[60%] sm:w-[50%] sm:py-[3%] colorful-button rounded-3xl text-[14px] text-white font-[700] py-[4%] flex items-center justify-center sm:text-[16px] cursor-pointer' autoComplete='on'>
                  {loading ? <BiLoaderAlt className='animate-spin mx-auto text-[20px]'/> : "Register"}
                </button>
                <h4 className='font-bold max-h-min'>or</h4>
                <div className='flex text-sari items-center justify-center'>
                  <h4>Register with</h4>
                  <img src={googleIcon} alt="" className='px-2'/>
                </div>
              </div>
            </form>
            <div className=' px-4 pt-0.5 text-[15px] hidden w-full font-bold justify-between h-[5vh] items-center lg:flex'>
              <div>Already have an Account? <Link to={"/"} className='text-sari font-bold'>Login</Link></div>
            </div>
          </div>
          <button className='hidden lg:flex'>
            <img src={googlePlayButton} alt="" />
          </button>
        </section>
      </main>
      <footer className='px-4 pt-0.5 text-[15px] w-full flex font-bold justify-between h-[45px] lg:hidden'>
        <div className=''>Already have an Account? <Link to={"/"} className='text-sari font-bold'>Login</Link></div>
      </footer>
    </div>
  )
}

export default SignUp;
