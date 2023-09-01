import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { BsHandThumbsUp } from 'react-icons/bs'
import { Context } from '../../context/StateContext'


const PasswordModal = ({title,content,btnCancel,bgClose,classnameBtn,setIsShowPopup,linkTo}) => {

  const {showModal, setShowModal} = useContext(Context)
  const navigate = useNavigate()

  return (
  <div className='fixed top-0 w-full z-40 h-screen bg-black bg-opacity-70 backdrop-blur-[2px]' onClick={()=>{setShowModal(false);navigate("/")}}>
    <section className='rounded-2xl w-fit max-w-[80vw] h-fit p-10 flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto'>
      <section className='text-center'>
        <figure className=' flex justify-center'>
          <div className='p-3 rounded-full border-4 border-lime-600'>
            <BsHandThumbsUp className='text-[40px] text-lime-600 '/>
          </div>
        </figure>
        <article className='py-4'>
          <span>Pesan konfirmasi sudah dikirim ke email anda, silahkan konfirmasi untuk melanjutkan pembuatan akun</span>
        </article>
      </section>
      <span className='flex gap-x-5'>
        <Link to={'/'} onClick={()=>{setShowModal(false)}}>
          <ButtonCustom value={'OK'} className={`${classnameBtn} !rounded-2xl bg-lime-600 text-white md:py-2 max-h-10 max-w-[200px] w-[16vw] h-[4.6vh] px-3 md:px-4 text-[17px] md:text-[24px]`}/>
        </Link>
        {btnCancel && <ButtonCustom value={'Cancel'} className={`${classnameBtn} border-[1.9px] border-cyan-700 py-1 md:py-2 px-3 md:px-4 text-[17px] md:text-[24px]`} eventOnClick={()=>setIsShowPopup(false)} />}
      </span>
    </section>
    {bgClose ? <div className='bg-black opacity-40 h-screen z-40 w-full' onClick={()=>setIsShowPopup(false)}> </div> : <div className='bg-black opacity-40 h-screen z-40 w-full'></div>}
</div>
  )
}

export default PasswordModal