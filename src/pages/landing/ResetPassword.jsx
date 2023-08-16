import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock, CiMail } from 'react-icons/ci'
import { Context } from '../../context/StateContext'

const PassReset = () => {
  const navigate = useNavigate()
  
  const {masjidSource, showModal, setShowModal, setEmail} = useContext(Context)

  const handleResetRequest = (e) => {
    e.preventDefault()

    let data = new FormData();
    data.append('email', email);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/sendResetLink',
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
          <div onClick={()=>{setShowModal(!showModal);console.log(showModal);}}>
            <h1 className='text-[34px] font-bold '>Confirm <span className='text-sari'>Email</span></h1>
          </div>
        </header>
        <main className=' md:px-8 md:py-6 md:border-2 md:border-white md:rounded-xl'>
          <form className='[&_>_div]:py-2 w-full' onSubmit={(e)=>{handleResetRequest(e)}}>
            <div className='max-sm:py-3 md:!py-10 md:text-center'>
              <p className='text-[15px]'>Input your email address below and we'll send you a confirmation email to reset your password</p>
            </div>
            <div>
              <input type="text" className='w-full h-9 rounded-md p-3 border-2 border-lime-500' placeholder='Email'/>
            </div>
            <div>
              <input type="submit" value="Submit" onChange={(e)=>{setEmail(e.target.value)}} className='rounded-md font-bold via-lime-600 from-lime-400 bg-gradient-to-tr to-lime-700 w-full py-1.5'/>
              {/* <Link to={"/forgot-password/reset"}>
              </Link> */}
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default PassReset