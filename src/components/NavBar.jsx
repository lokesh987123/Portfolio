import React from 'react'
import { links } from '../data'
// mx-auto max-w-7xl px-8
const NavBar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className="align-element flex flex-col gap-0.5 py-4 sm:flex-row sm:items-center sm:gap-x-16 sm:py-8">
        <div className="text-3xl font-bold">Web<span className='text-emerald-500'>Dev</span></div>
        <div>
          <ul className='flex gap-x-3'>
            {
               links.map(({id , href , text})=> {
                 return <a 
                 className='text-lg hover:text-emerald-600 duration-300 capitalize tracking-wider'
                 
                 key={id} href={href}>{text}</a>
               })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar