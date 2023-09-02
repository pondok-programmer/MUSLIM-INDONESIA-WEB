import React, {useState} from 'react'

const InputAdmin = ({label, functionModifier}) => {

  return (
   <div>
      <label className="font-bold">{label}</label>
      <input type="text" className="rounded-md flex-1"
      onChange={(e)=>{functionModifier(e.currentTarget.value)}}/>
   </div>
  )
}

export default InputAdmin