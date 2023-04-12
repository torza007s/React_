import React, { useState } from 'react'

import {BsArrowLeftShort , BsSearch} from "react-icons/bs"
import { AiFillEnvironment } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const Drawer = () => {
  const [open,setOpen] = useState(true)
  return (
    
    <div className='flex'>
      
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${ open ? 'w-52' : 'w-20'} duration-700 relative`}>
      <GiHamburgerMenu className={`bg-white text-dark-purple hover:bg-slate-600 absolute top-3 right-4
      text-3xl cursor-pointer
      ${!open && "rotate-180"}`}
      onClick={()=>setOpen(!open)} />
      <div className='inline-flex'>
    <AiFillEnvironment className='bg-amber-300  text-4xl hover:animate-spin
    rounded cursor-pointer block float-left mr-10'/>
    <h1 className={`text-white origin-left font-medium text-2xl duration-200
    ${!open && "scale-0"}`}>Tailwind</h1>
    </div>
    <div className='bg-amber-100 flex items-center rounded-md  mt-6 px-5 py-2'>
    <BsSearch className='text-white '/>
    </div>



      </div>
    
      
      <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-screen"></nav>
        <h1 className='text-2xl font-semibold'> Home Page </h1>
      </div>
      
    </div>
  )
}

export default Drawer