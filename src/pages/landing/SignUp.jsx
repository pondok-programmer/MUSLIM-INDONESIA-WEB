import { CiLock, CiUser, CiMail, CiPhone } from 'react-icons/ci'
import { PiPhoneLight, PiLock, PiLockKeyLight, PiLockKeyFill, PiLockFill }  from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import googleIcon from "../../assets/icons/Group 60.svg"
import googlePlayButton from "../../assets/icons/Rectangle 343.svg"
import { useContext } from 'react'
import { Context } from '../../context/StateContext'

const SignUp = () => {

  const {masjidSource} = useContext(Context)

  return (
    <div className='min-h-screen h-screen flex flex-col w-full text-white bg-kryptonite'>
      <main className='flex h-full w-full flex-col items-center [&_input]:placeholder:text-white md:gap-1 lg:flex-row lg:gap-0'>
        <section className='w-full h-[21vh] flex items-center justify-center md:h-[28vh] lg:h-full lg:w-auto lg:flex-1'>
          <figure className='flex w-[64%] items-center justify-center gap-1 md:flex-col md:gap-0 lg:flex-col-reverse'>
            <img src={masjidSource} alt="Your Logo" className='h-[18vh] aspect-square lg:h-[35vh]' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8 lg:leading-snug lg:text-[4.5vh]'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] md:w-[56%] lg:w-[50%] lg:p-14 lg:h-full flex items-center justify-center lg:flex-col lg:gap-3'>
          <div className='lg:border-white lg:border lg:h-[85%] lg:w-[54vh] lg:flex lg:flex-col lg:rounded-md w-full '>
            <div className=' flex h-24 justify-center items-center md:h-10 lg:h-16 lg:items-end'>
              <h1 className='text-[5.3vh] md:text-[37px] font-[700] text-sari'>Register</h1>
            </div>
            <form className='flex flex-col gap-8 p-3 pt-0 md:gap-10 md:py-0 lg:py-0 lg:gap-6 lg:flex-1 lg:px-12 lg:justify-center '>
              <div className='flex flex-col gap-1 md:gap-1 lg:gap-0 [&_input]:text-[20px]'>
                <InputCustom placeholder={'Nama Pengguna'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiUser className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
                <InputCustom placeholder={'User Name'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiUser className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
                <InputCustom type='tel' placeholder={'No. Telepon'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiPhoneLight className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
                <InputCustom type='email' placeholder={'Email'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiMail className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
                <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiLockKeyLight className='text-2xl md:text-[25px] text-white'/>}/>
                <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'md:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiLockFill className='text-2xl md:text-[25px] text-white'/>}/>
              </div>
              <div className='w-full flex flex-col items-center gap-0.5 md:gap-0 lg:gap-0 [&_button]:rounded-3xl [&_button]:w-[60%] md:[&_button]:w-[55%]'>
                <ButtonCustom value={'Register'} className={' bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] text-white font-[700] py-4 md:text-[16px]'}/>
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