import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'

export const Header = () => {
  return (
    <>
        <header className='flex justify-center'>
            <nav className='flex w-11/12 justify-between items-center p-3'>
              <Logo />
              <h1 className='text-[#ffffffd7]'>PORT<span className='text-[#ff8906d7]'>FOLIO</span></h1>
              <ul className='flex w-1/3 justify-between items-center'>
                  <li><NavLink className="text-xl p-2 hover:bg-[#ff8906d7] hover:rounded-xl hover:text-black duration-300" to='/'>Home</NavLink></li>
                  <li><NavLink className="text-xl p-2 hover:bg-[#ff8906d7] hover:rounded-xl hover:text-black duration-300" to='/myprojects'>Projects</NavLink></li>
                  <li><NavLink className="text-xl p-2 hover:bg-[#ff8906d7] hover:rounded-xl hover:text-black duration-300" to = '/contact'>Contact</NavLink></li>
              </ul>
            </nav>
        </header>
        <div className='w-full h-px bg-[#ff8906d7]'></div>
    </>
  )
}
