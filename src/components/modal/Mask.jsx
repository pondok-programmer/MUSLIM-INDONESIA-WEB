import React, { useContext, useState } from 'react'
import { Context } from '../../context/StateContext'

const Mask = () => {
   const {maskStatus, setMaskStatus} = useContext(Context)

  return (
    <div className='absolute w-full h-full' onClick={()=>{setMaskStatus(false)}}>Mask</div>
  )
}

export default Mask