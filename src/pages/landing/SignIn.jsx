import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext, useState } from 'react'
import { Context } from '../../context/StateContext'
import { instance } from '../../services/api/api'
import { BiLoaderAlt } from 'react-icons/bi'
import InputLogin from '../../components/ui/InputLogin'


const SignIn = () => {
  

  const {masjidSource} = useContext(Context)

  const [responseText, setResponseText] = useState("")
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const redirect = useNavigate()

  const handleLogin = (e) => {
    setLoading(true)
    e.preventDefault()
    setResponseText("")

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'login',
      data : data
    };

    instance
    .request(config)
    .then((response)=>
    {
      console.log(response)
      localStorage.setItem("role", response.data.role)
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("id", response.data.id)
      localStorage.setItem("name", response.data.fullname)
      localStorage.setItem("username", response.data.username)
      localStorage.setItem("photo", response.data.photo)
      setLoading(false)
      redirect("/home")
    })
    .catch((error)=>
    {
      setLoading(false)
      console.log(error)
      setResponseText(error.response.data.message)
    })
  }

  const handleGoogle = (e) => {
    e.preventDefault()


    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/login/google',
    //   data : data
    };

    instance
    .request(config)
    .then((y)=>
    {
      redirect("/home")
      console.log(y)
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
          <div className=' lg:border-white lg:border-opacity-75 lg:border-2 lg:h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-lg w-full'>
            <div className=' flex h-[25%] justify-center items-center lg:py-[0%]' >
              <h1 id='login-logo' className='text-[5.3vh] sm:text-[40px] lg:text-[47px] font-[700] text-sari'>Login</h1>
            </div>
            <form onSubmit={(e)=>{handleLogin(e)}} autoComplete='on' className='flex flex-col justify-evenly gap-8 lg:gap-0 lg:flex-1 lg:px-12'>
              <div className='flex flex-col gap-10 sm:gap-9 lg:gap-0 lg:pb-6 lg:[&_>_div]:my-[3%]'>
                <InputLogin type={"email"} modifierFunction={setEmail} text={"Email"}/>
                <InputLogin type={"password"} modifierFunction={setPassword} text={"Kata Sandi"}/>
              </div>
              <div className='w-full relative flex flex-col items-center gap-1 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%]'>
                <span className='absolute -top-[18%] left-1/2 text-xs w-max overflow-visible text-sari -translate-x-1/2'>{responseText}</span>
                <button type="submit" className='colorful-button w-[55%] rounded-full text-[14px] text-white font-[700] py-[4%] sm:text-[16px] cursor-pointer'>
                  {!loading ? "Masuk" : <BiLoaderAlt className='m-auto text-[24px] animate-spin'/>}
                </button>
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
