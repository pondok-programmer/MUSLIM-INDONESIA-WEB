import { CiLock, CiUser, CiMail, CiPhone } from 'react-icons/ci'
import { PiPhoneLight, PiLock, PiLockKeyLight, PiLockKeyFill, PiLockFill }  from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext } from 'react'
import { Context } from '../../context/StateContext'
import { registerAPI } from '../../services/instances'

const SignUp = () => {
  
  const {masjidSource, email, password, passwordConfirm, nomor, name, setEmail, setPassword, setPasswordConfirm, setNomor, setName} = useContext(Context)

  const handleRegister = (e) => {
    e.preventDefault()
    
    registerAPI(
      {
      email: email,
      name: name,
      password: password,   
      passwordConfirm: passwordConfirm,   
      nomor: nomor 
    }).then()
  }

  return (
    <div className='min-h-screen h-screen flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex h-full w-full flex-col items-center [&_input]:placeholder:text-white sm:gap-1 lg:flex-row lg:gap-0'>
        <section className='w-full h-[21vh] flex items-center justify-center sm:h-[28vh] lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 sm:flex-col sm:gap-0 lg:flex-col-reverse'>
            <img src={masjidSource} alt="Your Logo" className='h-[18vh] aspect-square lg:h-[35vh]' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8 lg:leading-snug lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] sm:w-[70%] lg:w-[50%] lg:p-14 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className='lg:border-white lg:border lg:h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md w-full '>
            <div className=' flex justify-center items-center sm:h-10 lg:h-16 lg:items-end'>
              <h1 className='text-[5.3vh] sm:text-[37px] font-[700] text-sari'>Register</h1>
            </div>
            <form onSubmit={(e)=>{handleRegister(e)}} className='flex flex-col gap-8 p-3 pt-0 sm:gap-6 sm:py-0 lg:py-0 lg:gap-6 lg:flex-1 lg:px-12 lg:justify-center'>
              <div className='flex flex-col gap-1 sm:gap-0 lg:gap-0 [&_input]:px-1 max-lg:[&_>_div]:pt-3 max-lg:[&_input]:pb-1 max-lg:[&_input]:pt-0 [&_input]:text-[19px]'>
                <InputCustom placeholder={'Nama Pengguna'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'}/>
                <InputCustom placeholder={'User Name'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} />
                <InputCustom type='tel' placeholder={'No. Telepon'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} />
                <InputCustom type='email' placeholder={'Email'} className={'sm:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} />
                <InputCustom type='password' placeholder={'Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} />
                <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'sm:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full sm:w-[93%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} />
              </div>
              <div className='w-full flex flex-col items-center gap-0.5 sm:gap-0 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%] sm:[&_button]:w-[55%]'>
                <input type="submit" value="Register" className='w-[55%] bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] text-white font-[700] py-3.5 sm:text-[16px] cursor-pointer' autoComplete='on'/>
                <h4 className='font-bold'>or</h4>
                <button className='flex text-sari items-center justify-center'>
                  <h4>Register with</h4>
                  <img src={googleIcon} alt="" className='px-2'/>
                </button>
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