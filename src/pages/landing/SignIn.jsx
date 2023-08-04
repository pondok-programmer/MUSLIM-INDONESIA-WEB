import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock, CiMail } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"

const SignIn = () => {
  return (      
    <div className='min-h-screen h-screen flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex h-full w-full flex-col items-center [&_input]:placeholder:text-white md:gap-4 lg:flex-row lg:gap-0'>
        <section className='w-full h-[28vh] flex items-center justify-center lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 md:flex-col md:gap-0 lg:flex-col-reverse '>
            <img src="src\assets\react.svg" alt="Your Logo" className='h-[18vh] aspect-square lg:h-[35vh]' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8 lg:leading-snug lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] md:w-[70%] lg:w-[50%] lg:p-14 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className='lg:border-white lg:border lg:h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md w-full'>
            <div className=' flex h-24 justify-center items-center lg:h-[20%]'>
              <h1 className='text-[5.3vh] md:text-[40px] font-[700] text-sari'>Login</h1>
            </div>
            <form className='flex flex-col gap-8 p-3 md:gap-14 lg:py-7 lg:gap-10 lg:flex-1 lg:px-12'>
              <div className='flex flex-col gap-12 md:gap-9'>
                <InputCustom type='email' placeholder={'Email'} className={'md:text-[24px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-3 border-[#fff]'} icon={<CiMail className='text-2xl md:text-[27px] p-0 m-0 text-white'/>}/>
                <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[24px] text-[2.3vh] focus:ring-0 border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-3 border-[#fff]'} icon={<CiLock className='text-2xl md:text-[27px] text-white'/>}/>
              </div>
              <div className='w-full flex flex-col items-center gap-1 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%]'>
                <Link to={"/home"}>
                  <ButtonCustom value={'Login'} className={' bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] text-white font-[700] py-4 md:text-[16px] '}/>
                </Link>
                <h4 className='font-bold'>or</h4>
                <button className='flex text-sari items-center justify-center'>
                  <h4>Login with</h4>
                  <img src={googleIcon} alt="" className='px-2'/>
                </button>
              </div>
            </form>
            <div className=' px-4 pt-0.5 text-[15px] hidden w-full font-bold justify-between h-[5vh] items-center lg:flex'>
              <div className='flex-1 '>Forgot Password?</div>
              <Link to={"/register"}>
                <div className='text-sari '>Register</div>
              </Link>
            </div>
          </div>
          <button className='hidden lg:flex'>
            <img src={googlePlayButton} alt="" />
          </button>
        </section>
      </main>
      <footer className=' px-4 pt-0.5 text-[15px] w-full flex font-bold justify-between h-[6vh] lg:hidden'>
        <div className='flex-1 '>Forgot Password?</div>
        <Link to={"/register"}>
          <div className='text-sari '>Register</div>
        </Link>
      </footer>
    </div>
  )
}

export default SignIn