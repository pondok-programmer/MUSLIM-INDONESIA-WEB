import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { BsHandThumbsUp } from 'react-icons/bs'
import { Context } from '../../context/StateContext'


const LogoutModal = ({title,content,btnCancel,bgClose,classnameBtn,setIsShowPopup,linkTo}) => {

  const {showModal, setShowModal} = useContext(Context)
  const navigate = useNavigate()

  return (
  <div className='fixed top-0 w-full z-[99] h-screen !bg-[url("")] !bg-black/30 backdrop-blur-[1px]' onClick={()=>{setShowModal(false);navigate("/")}}>
    <section className='rounded-2xl w-fit max-w-[400px] h-fit p-10 flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto'>
      <section className='text-center'>
        <article className='py-4'>
          <span>Logout Berhasil</span>
        </article>
      </section>
      <span className='flex gap-x-5'>
        <Link to={'/'} onClick={()=>{setShowModal(false)}}>
          <button className='bg-red-600 rounded-2xl text-[20px] flex items-center px-4 text-white'>
            Ok
          </button>
        </Link>
      </span>
    </section>
  </div>
  )
}

export default LogoutModal