import { ButtonCustom, InputCustom } from '../../components/ui'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext, useState } from 'react'
import { Context } from '../../context/StateContext'
import axios from 'axios'
import { instance } from '../../services/api/api'
// import instance from '../../services/api/api'


const SignIn = () => {
  
  // const {masjidSource, email, setEmail, password, setPassword} = useContext(Context)
  const [isShow, setIsShow] = useState(false)

  const {masjidSource} = useContext(Context)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const redirect = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'login',
      data : {
        email: email,
        password: password
      },
    };

    instance
    .request(config)
    .then((response)=>
    {
      console.log(response)
      localStorage.setItem("role", response.data.role)
      localStorage.setItem("token", response.data.token)
      redirect("/home")
    })
    .catch((error)=>
    {
      // redirect("/home")
      console.log(error)
    })
  }

  const handleGoogle = (e) => {
    e.preventDefault()

    // let data = new FormData();
    // data.append('email', email);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/login/google',
    //   data : data
    };

    instance
    .request(config)
    .then((y)=>
    {
      console.log(y)
      redirect("/home")
    })
    .catch((y)=>
    {
      redirect("/home")
      console.log(y)
    })
  }
  
  return (      
    <div className='min-h-screen h-screen flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex h-full w-full flex-col items-center [&_input]:placeholder:text-white sm:gap-4 lg:flex-row lg:gap-0'>
        <section className='w-full h-[28vh] flex items-center justify-center lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 sm:flex-col sm:gap-0 lg:flex-col-reverse '>
            <img src={masjidSource} alt="Your Logo" className='h-[18vh] aspect-square lg:h-[35vh]' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8 sm:leading-tight lg:leading-snug lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] sm:w-[70%] lg:w-[50%] lg:p-14 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className='lg:border-white lg:border lg:h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md w-full'>
            <div className=' flex h-24 justify-center items-center lg:py-[2%]' >
              <h1 className='text-[5.3vh] sm:text-[40px] font-[700] text-sari content-["makan"]'>Login</h1>
            </div>
            <form onSubmit={(e)=>{handleLogin(e)}} autoComplete='on' className='flex flex-col justify-around gap-8 lg:gap-0 lg:flex-1 lg:px-7'>
              <div className='flex flex-col gap-10 sm:gap-9 lg:gap-0 lg:[&_>_div]:my-[3%]'>
                <div className={`flex items-center border-b-[1.7px] relative px-1 border-[#fff]`}> 
                  {/* <span className={`absolute top-[15.7%] pointer-events-none text-[14px] text-[24px] left-[1.3%] ${(e)=>{console.log(e);}}`}>Email</span> */}
                  <input type={'email'} autoComplete='email' placeholder='Email' className={`sm:text-[24px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[90%] pb-2 pt-2 bg-transparent text-[#fff] `} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className={`flex items-center border-b-[1.7px] px-1 border-[#fff]`}>
                  <input type={'password'} autoComplete='on' placeholder={"Kata Sandi"} className={`sm:text-[24px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[90%] pb-2 px-1 pt-2 bg-transparent text-[#fff]`} onChange={(e)=>{setPassword(e.target.value)}}/>
                  {isShow ? <BsEyeSlashFill  className='text-2xl md:text-[25px] text-[#fff] cursor-pointer' onClick={()=>setIsShow(!isShow)}/> : <BsEyeFill  className='text-2xl md:text-[25px] text-[#fff] cursor-pointer' onClick={()=>setIsShow(!isShow)}/>}
                </div>
              </div>
              <div className='w-full flex flex-col items-center gap-1 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%]'>
                <input type="submit" value="Log in" className='w-[55%] bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] text-white font-[700] py-[4%] sm:text-[16px] cursor-pointer' autoComplete='on'/>
                <h4 className='font-bold'>or</h4>
                <div className='flex text-sari items-center justify-center' onClick={(e)=>{handleGoogle(e)}}>
                  <h4 className='cursor-pointer'>Login with</h4>
                  <img src={googleIcon} alt="" className='pl-2 cursor-pointer'/>
                </div>
              </div>
            </form>
            <div className=' px-4 pt-0.5 text-[15px] hidden w-full font-bold justify-between min-h-[10%] items-center lg:flex'>
              <div className='flex-1 '><Link to={"/forgot-password"}>Forgot Password?</Link></div>
              <Link to={"/register"}>
                <div className='text-sari '>Register</div>
              </Link>
            </div>
          </div>
          <Link className='hidden lg:flex'>
            <img src={googlePlayButton} alt="" />
          </Link>
        </section>
      </main>
      <footer className=' px-4 pt-0.5 text-[15px] w-full flex font-bold justify-between h-[6vh] lg:hidden'>
        <div className='flex-1 '><Link to={"/forgot-password"}>Forgot Password?</Link></div>
        <Link to={"/register"}>
          <div className='text-sari '>Register</div>
        </Link>
      </footer>
    </div>
  )
}

export default SignIn;
