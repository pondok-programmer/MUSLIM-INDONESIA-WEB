import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { BsHandThumbsUp } from 'react-icons/bs'
import { Context } from '../../context/StateContext'


const LoginModal = ({title,content,btnCancel,bgClose,classnameBtn,setIsShowPopup,linkTo}) => {

  const {showModal, setShowModal} = useContext(Context)
  const navigate = useNavigate()

  return (
  <div className='fixed top-0 w-full z-[99] h-screen !bg-[url("")] backdrop-blur-[1px]' onClick={()=>{setShowModal(false)}}>
    <section className='rounded-2xl w-fit max-w-[400px] h-fit p-10 flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto shadow-[1px_2px_8px_-1px_black]'>
      <section className='text-center'>
        <article className='py-4'>
          <span>Silahkan Login terlebih dahulu untuk membuka fitur pencarian lokasi</span>
        </article>
      </section>
      <span className='flex gap-x-5'>
        <Link to={'/login'} onClick={()=>{setShowModal(false)}}>
          <button className='bg-lime-500 rounded-2xl text-[20px] flex items-center px-4 text-white'>
            Login
          </button>
        </Link>
      </span>
    </section>
  </div>
  )
}

export default LoginModal