import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { Context } from '../../context/StateContext'
import LogoutModal from './LogoutModal'
import LoginModal from './LoginModal'
import PasswordModal from './PasswordModal'


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
  } else if (showModal == "passwordRequest") {
    return (
      <>
        <PasswordModal/>
      </>
    )
  } else if (showModal == "passwordChange") {
    return (
      <>
        <PasswordModal/>
      </>
    )
  }
}

export default Modal