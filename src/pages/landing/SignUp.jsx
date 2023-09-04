import { Link, useNavigate } from 'react-router-dom'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/StateContext'
import { instance } from '../../services/api/api'
import InputRegister from '../../components/ui/InputRegister'
import { BiLoaderAlt } from 'react-icons/bi'

const SignUp = () => {
  // const {masjidSource, email, password, passwordConfirm, nomor, name, setEmail, setPassword, setPasswordConfirm, setNomor, setName} = useContext(Context)
  const {masjidSource} = useContext(Context)
  const redirect = useNavigate()

  const [responseText, setResponseText] = useState("")
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState(false)
  const [maxH, setMaxH] = useState(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))

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
      setNotif(true)
      setTimeout(() => {
        setNotif(false)
      }, 5000);
      setResponseText("Register gagal")
      console.log(error)
    })
  }


  return (
    <div className='min-h-screen lg:h-screen h-full flex flex-col w-full text-white bg-kryptonite'>
      {notif &&
        <div className={`absolute quick-notification bottom-[10vh] peer right-1/2 translate-x-1/2 lg:text-[11px] px-[1%] bg-black/60 opacity-80 text-white rounded-2xl`}>Registrasi Gagal</div>
      }
      <main className='flex flex-1 h-full w-full flex-col items-center [&_input]:placeholder:text-white sm:gap-1 lg:flex-row lg:gap-0 '>
        <section className='w-full flex items-center justify-center sm:h-full lg:h-full lg:w-auto lg:flex-[0.97]'>
          <figure className='flex w-[64%] items-center justify-center gap-1 sm:flex-col sm:gap-0 lg:flex-col-reverse'>
            <img src={masjidSource} alt="Your Logo" className='h-[140px] sm:h-[170px] aspect-square lg:h-[35vh]' />
            <h1 className='text-[30px] sm:text-[36px] max-w-min text-center font-medium flex-wrap  lg:text-[4.5vh]'><span className='text-sari'>Muslim </span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-full lg:w-[80%] h-[70%] flex-1 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className={`lg:border-white lg:border-2 w-[80%] sm:w-[75%] backdrop-blur-[2px] lg:border-opacity-75 lg:!min-h-[85%] lg:w-[54vh] lg:rounded-md flex flex-col`} style={{minHeight:`${maxH*(0.6)}px`}}>
            <div className='flex justify-center flex-[0.23] items-end max-lg:pb-[1%] lg:h-[18%]'>
              <h1 className='text-[32px] sm:text-[37px] lg:text-[41px] font-[700]  text-sari'>Register</h1> 
            </div>
            <form onSubmit={(e)=>{handleRegister(e)}} className='flex flex-col justify-between gap-8 sm:gap-0 sm:flex-[0.4] lg:gap-0 lg:flex-1 lg:text-[14px] lg:px-10 ' autoComplete={toString("on")}>
              <div className='overflow-auto overflow-x-hidden lg:h-[68%] w-[91%] mx-auto'>
                <div className='flex flex-col gap-2 sm:gap-5 lg:py-[10%] lg:pb-[5%] [&_>_div]:!pt-[3%] lg:[&_>_div]:!pt-0 lg:h-full lg:gap-4 [&_input]:px-1 max-lg:[&_>_div]:pt-3 max-lg:[&_input]:pb-1 max-lg:[&_input]:pt-0 justify-evenly'>
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
              </div>
              <div className='w-full relative flex flex-col items-center gap-0.5 sm:gap-0.5 lg:gap-0 [&_button]:rounded-3xl max-lg:py-[2%] lg:h-[25%]'>
                {/* <span className='absolute -top-[18%] left-1/2 text-xs w-max overflow-visible text-sari -translate-x-1/2'>{responseText}</span> */}
                <button type="submit" className='w-[60%] sm:w-[50%] sm:py-[3%] colorful-button rounded-3xl text-[14px] lg:text-[15px] text-white font-[700] py-[4%] flex items-center justify-center sm:text-[16px] cursor-pointer min-h-[35px] min-w-[115px]' autoComplete='on'>
                  {loading ? <BiLoaderAlt className='animate-spin mx-auto text-[20px]'/> : "Register"}
                </button>
                <h4 className='font-bold max-h-min lg:text-[13px]'>or</h4>
                <div className='flex text-sari items-center justify-center'>
                  <h4 className='text-[14px]'>Register with</h4>
                  <img src={googleIcon} alt="" className='px-2 lg:h-[4.3vh] max-h-[26px]'/>
                </div>
              </div>
            </form>
            <div className=' px-4 pt-0.5 text-[15px] hidden w-full font-bold justify-between h-[5vh] items-center lg:flex'>
              <div className='text-[13px]'>Already have an Account? <Link to={"/login"} className='text-sari font-bold'>Login</Link></div>
            </div>
          </div>
          <button className='hidden text lg:flex'>
            <img src={googlePlayButton} alt="" className='h-[7vh] max-h-[53px]'/>
          </button>
        </section>
      </main>
      <footer className='px-4 pt-0.5 text-[15px] w-full flex font-bold justify-between h-[45px] lg:hidden'>
        <div className=''>Already have an Account? <Link to={"/login"} className='text-sari font-bold'>Login</Link></div>
      </footer>
    </div>
  )
}

export default SignUp;
