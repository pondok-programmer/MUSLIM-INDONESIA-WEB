import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import ButtonCustom from '../ui/ButtonCustom'
import { BsHandThumbsUp } from 'react-icons/bs'
import { Context } from '../../context/StateContext'
import LogoutModal from './LogoutModal'
import LoginModal from './LoginModal'


const Modal = ({Usage}) => {

  const {showModal, setShowModal} = useContext(Context)
  const navigate = useNavigate()

  if (showModal == "logout") {
    return (
    <>
      <LogoutModal/> 
    </>
    )
  } else if (showModal == "login") {
    return (
      <>
        <LoginModal/>
      </>
    )
  }
}

export default Modal