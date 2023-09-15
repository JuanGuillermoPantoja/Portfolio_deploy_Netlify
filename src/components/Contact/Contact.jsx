import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import desarrolloImg from '../../img/desarrollo-software-contact.png'


export const Contact = () => {
  return (
    <>
      <Header />
      <section className='bg-[#26252c] h-100 flex justify-center items-center'>
          <div className='bg-[#0f0e17] h-96 w-2/3 flex justify-center items-center shadow-3xl'>
            <div className='bg-[#ff8b06be] h-full w-1/2 flex justify-center items-center opacity-80'>
                <img className='h-80' src={desarrolloImg} alt="" />
            </div>
            <form className="bg-[#0f0e17] flex flex-col justify-center items-center w-1/2 h-full border-2 border-[#ff8b06d7] border-s-0 " action="">
                <h2 className='text-center text-2xl my-2 text-[#ff8b06d7]'>CONTACTAME</h2>
                <input className="w-1/2 h-8 px-2 text-teal-200 my-1" type="text" placeholder='Nombres' />  
                <input className="w-1/2 h-8 px-2 text-teal-200 my-1" type="text" name="" id="" placeholder='Apellidos' /> 
                <input className="w-1/2 h-8 px-2 text-teal-200 my-1" type="email" placeholder='Correo' />
                <textarea className="w-1/2 h-36 px-2 text-teal-200 my-1" type="text" name="" id="" placeholder='Mensaje'></textarea>
                <input className="bg-[#0f0e17] w-20 py-1 my-1 border-solid text-2xl hover:cursor-pointer hover:bg-[#ff8906] hover:text-black hover:rounded-xl duration-300" type="submit" />
            </form>
          </div>
      </section>
      <Footer />
    </>
  )
}
