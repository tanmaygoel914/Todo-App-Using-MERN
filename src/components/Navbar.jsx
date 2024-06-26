import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
    <div className="logo">
        <span className='font-bold text-x1 mx-9'>iTask</span>
    </div>
    <ul className="flex gap-8">
    <li className='cursor-pointer  hover:font-bold' >HOME</li>
    <li className='cursor-pointer mx-8 hover:font-bold'>Your Task</li>
    </ul>
        
    </nav>
  )
}

export default Navbar