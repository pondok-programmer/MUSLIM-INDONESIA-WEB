import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../context/StateContext'
import { instance } from '../../services/api/api'

const PassReset = () => {
  const navigate = useNavigate()
  
  const {showModal, setShowModal} = useContext(Context)

  const [email, setEmail] = useState("")
  const redirect = useNavigate()
  
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
      setShowModal("passwordRequest");
      // redirect("/login")
    })
    .catch((y)=>
    {
      // redirect("/login")
      console.log(y)
      setShowModal("passwordRequest");
    })
  }

  return (
    <div className='max-h-screen h-full flex flex-col w-full py-8 md:py-14 text-white bg-kryptonite'>
      <div className='p-6 sm:px-12 flex flex-col w-full h-screen items-center max-h-full md:m-auto md:w-[80%] lg:w-[70%] max-w-3xl'>
        <header className='max-sm:py-3 sm:py-5 md:text-center'>
          <div onClick={()=>{}}>
            <h1 className='text-[34px] font-bold '>Reset <span className='text-sari'>Password</span></h1>
          </div>
        </header>
        <main className=' md:px-8 md:py-6 md:border-2 md:border-white backdrop-blur-[2px]  md:rounded-xl md:max-w-[510px] md:min-h-[280px]'>
          <form className='[&_>_div]:py-2 w-full flex flex-col h-full' onSubmit={(e)=>{handleResetRequest(e)}}>
            <div className='max-sm:py-3 md:!py-10 md:text-center'>
              <NavLink to={"/forgot-password/reset"}>

              <p className='text-[15px]'>Masukkan Email dengan password yang ingin anda reset di kolomdi bawah</p>
              </NavLink>
            </div>
            <div className='flex-1 gap-2 flex flex-col justify-center '>
              <div >
                <input type="text" className='w-full text-black h-9 text-black rounded-md p-3 border-2 border-lime-500' placeholder='Email' autoComplete='email' onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div>
                <input type="submit" value="Submit" onChange={(e)=>{setEmail(e.target.value)}} className='colorful-button rounded-md font-bold cursor-pointer via-lime-600 from-lime-400 bg-gradient-to-tr to-lime-700 w-full py-1.5'/>
                {/* <Link to={"/forgot-password/reset"}>
                </Link> */}
              </div>

            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default PassReset