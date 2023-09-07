import React, { useContext, useRef, useState } from 'react'
import { PiCaretDown } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../context/StateContext';

const ListDropdown = ({label, text, list, tag ,setTag, translate}) => {
  const elementDropDown = useRef(null)
  const [dropDown, setDropDown] = useState(false)
  
  return (
  <li className='flex items-center'>
    <NavLink className={()=> window.location.hash == `#${label}` ? " border-b-lime-800 border-white px-1.5 border-b-2 text-lime-800" : "px-1.5 border-b-2 border-transparent hover:border-b-lime-800"} to={window.location.hash == `#${label}` ? "/" : `#${label}`} onClick={()=>{ tag != `${label}` ? setTag(`${label}`) : setTag("")}} >{text}</NavLink>
    <div className={`relative ${dropDown && "z-50"}`}>
      <button ref={elementDropDown} onClick={()=>{list[0] && setDropDown(!dropDown)}}>
        <PiCaretDown className='pointer-events-none'/>
      </button>
      <ul className={`absolute w-[25vw] ${!dropDown ? "max-h-0" : "!max-h-[45vh]"} overflow-y-hidden !duration-300 ease-in-out -bottom-0.5 right-0 translate-x-[43.8%] ${translate} translate-y-full min-w-[180px] bg-white shadow-[0px_2px_5px_-1px_black]`} >
        {list.map((x, y)=>{
          
          return(
            <li className='cursor-pointer border-b text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal border-gray-700 last:border-b-0 ' key={y}>
              <Link className='p-2 py-3 lg:p-3 !font-normal block' to={`https://www.google.com/maps/search/${x.lat},${x.long}`} target='_blank'>
                {x.place_name}
              </Link>
            </li>
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