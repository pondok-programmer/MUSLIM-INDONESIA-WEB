import React, { useContext, useRef, useState } from 'react'
import { PiCaretDown } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/StateContext';

const ListDropdown = ({label, text, list, tag ,setTag}) => {
  const elementDropDown = useRef(null)
  const [dropDown, setDropDown] = useState(false)
  const {globalTarget, setGlobalTarget} = useContext(Context)
  

  return (
  <li className='flex items-center'>
    <NavLink className={()=> window.location.hash == `#${label}` ? " border-b-lime-800 border-white px-1.5 border-b-2 text-lime-800" : "px-1.5 border-b-2 border-transparent hover:border-b-lime-800"} to={window.location.hash == `#${label}`? "/home" : `#${label}`} onClick={()=>{ tag != `${label}` ? setTag(`${label}`) : setTag("")}} >{text}</NavLink>
    <div className={`relative ${dropDown && "z-50"}`}>
      <button ref={elementDropDown} onClick={()=>{list[0] && setDropDown(!dropDown)}}>
        <PiCaretDown className='pointer-events-none'/>
      </button>
      <ul className={`absolute w-[25vw] ${!dropDown ? "max-h-0" : "!max-h-[45vh]"} overflow-y-hidden !duration-300 ease-in-out -bottom-0.5 right-0 translate-x-[43%] translate-y-full min-w-[180px] bg-white shadow-[0px_2px_5px_-1px_black]`} >
        {list.map((x, y)=>{
          console.log(x);
          return(
            <li className='p-2 py-3 lg:p-3 cursor-pointer border-b text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal border-gray-700 last:border-b-0 ' key={y}>{x.place_name}</li>
          )
        })}
        
      </ul>
    </div> 
    {dropDown && 
    <div className={`z-40 top-0 left-0 absolute h-full w-full`} onClick={()=>{setDropDown(false)}}></div>
    }
  </li>
  )
}

export default ListDropdown