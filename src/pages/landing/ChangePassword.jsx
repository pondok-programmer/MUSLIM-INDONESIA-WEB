import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../context/StateContext'

const PassChange = () => {
  const navigate = useNavigate()
  
  const {masjidSource} = useContext(Context)

  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleNewPass = (e) => {
    e.preventDefault()

    let data = new FormData();
    data.append('password', password);
    data.append('password_confirmation ', passwordConfirm);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/resetPassword',
      data : data
    };

    instance
    .request(config)
    .then((response)=>
    {
      console.log(response)
      redirect("/login")
    })
    .catch((error)=>
    {
      console.log(error)
    })
  }

  return (
    <div className='max-h-screen h-full flex flex-col w-full py-8 md:py-14 text-white bg-kryptonite'>
      <div className='p-6 sm:px-12 flex flex-col items-center w-full h-screen max-h-full md:m-auto md:w-[80%] lg:w-[70%] max-w-3xl'>
        <header className='max-sm:py-3 sm:py-5 md:text-center'>
          <div>
            <h1 className='text-[34px] font-bold '>Change <span className='text-sari'>Password</span></h1>
          </div>
        </header>
        <main className='md:px-8 md:py-6 md:border-2 md:border-white backdrop-blur-[2px] md:rounded-xl md:max-w-[510px]  md:min-w-[500px] md:min-h-[280px]'>
          <div className='max-sm:py-3 md:!py-10 md:text-center'>
            <p className='text-[15px]'>Masukkan password baru sebagai pengganti password lama anda</p>
          </div>
          <form className='[&_>_div]:py-2.5 '>
            <div className='flex flex-col gap-2 [&_input]:text-black'>
              <input type="password" className='w-full h-9 rounded-md p-3 border-2 border-lime-500' placeholder='New Password' onChange={(e)=>{setPassword(e.target.value)}}/>
              <input type="password" className='w-full h-9 rounded-md p-3 border-2 border-lime-500' placeholder='Confirm New Password' onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
            </div>
            <div>
              <input type="submit" value="Submit" className='colorful-button rounded-md font-bold via-lime-600 from-lime-400 bg-gradient-to-tr to-lime-700 w-full py-1.5' />
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default PassChange