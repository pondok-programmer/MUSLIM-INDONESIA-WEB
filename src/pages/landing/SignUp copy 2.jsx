import { CiLock, CiUser, CiMail, CiPhone } from 'react-icons/ci'
import { PiPhoneLight, PiLock, PiLockKeyLight, PiLockKeyFill, PiLockFill }  from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'

const SignUp = () => {
  return (
    <div className='min-h-screen h-full flex flex-col w-full text-white bg-kryptonite '>
      <main className='flex flex-col flex-1 items-center [&_input]:placeholder:text-white'>
        <section className='w-full h-[21vh] flex items-center justify-center md:h-[28vh]'>
          <figure className='flex w-[64%] items-center justify-center gap-1 md:flex-col lg:flex-row'>
            <img src="src\assets\react.svg" alt="Your Logo" className='h-[18vh] aspect-square' />
            <h1 className='text-[3.7vh] max-w-min text-center font-medium flex-wrap leading-8'><span className='text-sari'>Muslim</span> Indonesia</h1>
          </figure>
        </section>
        <section className='w-[80%] md:w-[70%]'>
          <div className=' flex h-24 justify-center items-center md:h-12'>
            <h1 className='text-[5.3vh] md:text-[37px] font-[700] text-sari'>Register</h1>
          </div>
          <form className='flex flex-col gap-8 px-3 py-3 md:py-1'>
            <div className='flex flex-col gap-1 md:[&_input]:text-[20px]'>
              <InputCustom placeholder={'Nama Pengguna'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiUser className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
              <InputCustom placeholder={'User Name'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiUser className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
              <InputCustom type='tel' placeholder={'No. Telepon'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiPhoneLight className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
              <InputCustom type='email' placeholder={'Email'} className={'md:text-[26px] focus:ring-0 text-[2.3vh] border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2 '} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<CiMail className='text-2xl md:text-[25px] p-0 m-0 text-white'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiLockKeyLight className='text-2xl md:text-[25px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'md:text-[26px] text-[2.3vh] focus:ring-0 border-none outline-none w-full md:w-[90%] pb-2 px-3 pt-2'} classNameDiv={'border-b-[1.7px] pt-2 border-[#fff]'} icon={<PiLockFill className='text-2xl md:text-[25px] text-white'/>}/>
            </div>
            <div className='flex flex-col items-center [&_button]:rounded-3xl [&_button]:w-[60%]'>
              <ButtonCustom value={'Register'} className={'bg-gradient-to-br from-lime-400 to-lime-700 rounded-3xl text-[14px] w-[60%] text-white font-[700] py-4'}/>
              <h4 className='font-bold'>or</h4>
              <div className='flex text-sari'>
                <h4>Register with</h4>
                <div className='px-2'>Google</div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <footer className=' px-4 pt-0.5 text-[15px] w-full flex justify-start h-[6vh]'>
        <div className=''>Already have an Account? <Link to={"/"} className='text-sari font-bold'>Login</Link></div>
      </footer>
    </div>
  )
}

export default SignUp