import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { BsHandThumbsUp } from 'react-icons/bs'
import { Context } from '../../context/StateContext'


const PasswordModal = ({title,content,btnCancel,bgClose,classnameBtn,setIsShowPopup,linkTo}) => {

  const {showModal, setShowModal} = useContext(Context)
  const navigate = useNavigate()

  return (
  <div className='fixed top-0 w-full z-40 h-screen bg-black bg-opacity-70 backdrop-blur-[2px]' onClick={()=>{setShowModal(false);navigate("/login")}}>
    <section className='rounded-2xl w-fit max-w-[45vw] h-fit p-10 flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto'>
      <section className='text-center'>
        <figure className=' flex justify-center'>
          <div className='p-3 rounded-full border-4 border-lime-600'>
            <BsHandThumbsUp className='text-[40px] text-lime-600 '/>
          </div>
        </figure>
        <article className='py-4'>
          <span>Pesan konfirmasi sudah dikirim ke email anda, silahkan ikutin tautan yang tertera untuk melanjutkan</span>
        </article>
      </section>
      <div className='w-full flex justify-center'>
        <Link className='rounded-2xl px-[7%] text-white font-bold py-[0.9%] bg-lime-500'>
        OK
        </Link>
      </div>
    </section>
    {bgClose ? <div className='bg-black opacity-40 h-screen z-40 w-full' onClick={()=>setIsShowPopup(false)}> </div> : <div className='bg-black opacity-40 h-screen z-40 w-full'></div>}
</div>
  )
}

export default PasswordModal