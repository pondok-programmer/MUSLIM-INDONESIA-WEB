import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock, CiMail } from 'react-icons/ci'
import { Context } from '../../context/StateContext'

const PassChange = () => {
  const navigate = useNavigate()
  
  const {masjidSource} = useContext(Context)

  const handleNewPass = (e) => {
    e.preventDefault()

    // let data = new FormData();
    // data.append('email', email);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/resetPassword',
      data : data
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
    <div className='max-h-screen h-full flex flex-col w-full py-8 md:py-14 text-white bg-kryptonite'>
      <div className='p-6 sm:px-12 flex flex-col w-full h-screen max-h-full md:m-auto md:w-[80%] lg:w-[70%] max-w-3xl'>
        <header className='max-sm:py-3 sm:py-5 md:text-center'>
          <div>
            <h1 className='text-[34px] font-bold '>Reset <span className='text-sari'>Password</span></h1>
          </div>
        </header>
        <main className='md:px-8 md:py-6 md:border-2 md:border-white md:rounded-xl'>
          <div className='max-sm:py-3 md:!py-10 md:text-center'>
            <p className='text-[15px]'>Submit your new password below to reset your password</p>
          </div>
          <form className='[&_>_div]:py-2.5 '>
            <div className='flex flex-col gap-2'>
              <input type="password" className='w-full h-9 rounded-md p-3 border-2 border-lime-500' placeholder='New Password'/>
              <input type="password" className='w-full h-9 rounded-md p-3 border-2 border-lime-500' placeholder='Confirm New Password'/>
            </div>
            <div>
              <input type="submit" value="Submit" className='rounded-md font-bold via-lime-600 from-lime-400 bg-gradient-to-tr to-lime-700 w-full py-1.5'/>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default PassChange