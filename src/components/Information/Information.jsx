import React from 'react'
import { NavLink } from 'react-router-dom'
const meImg = '../img/me-removebg.png'
const gitHub = '../img/github__icon.png'
const facebook = '../img/facebook__icon.png'
const instagram = '../img/instagram__icon.png'
const discord = '../img/Discord__icon.png'

export const Information = () => {
  return (
    <section className='flex justify-center items-center h-100 bg-[#26252c]'>
        <div className='w-1/2 h-5/6 flex flex-col justify-center items-center'>
            <h1 className='text-[#ffffffd7] mb-10'><span className='text-[#ff8906d7]'>BIENV</span>ENIDO<span className='text-[#ff8906d7]'>!</span></h1>
            <p className='w-11/12 text-[#c4c3c3] text-justify mb-10'>Hola soy Juan Guillermo Pantoja Castro un apasionado del desarrollo de software 
                                                    en constante evolución. He estado explorando y creciendo en este campo de manera 
                                                    constante. Estoy emocionado por futuros desafíos y oportunidades en el mundo del 
                                                    desarrollo de software. Estoy siempre interesado en establecer conexiones 
                                                    profesionales y colaborar en nuevos proyectos. Pueden encontrarme en:</p>
            <p></p>
            <div className='w-full flex justify-center'>
                <ul className='flex w-1/2 justify-around'>
                    <li className='w-12 shadow-sm shadow-[#ff8906d7] rounded-xl hover:shadow-md hover:shadow-[#ff8906d7]'><NavLink to="https://github.com/JuanGuillermoPantoja?tab=repositories" target='_blank'><img src={gitHub} alt="" /></NavLink></li>
                    <li className='w-12 shadow-sm shadow-[#ff8906d7] rounded-xl hover:shadow-md hover:shadow-[#ff8906d7]'><NavLink to="https://www.facebook.com/juanguillermo.pantojacastro?mibextid=ZbWKwL" target='_blank'><img src={facebook} alt="" /></NavLink></li>
                    <li className='w-12 shadow-sm shadow-[#ff8906d7] rounded-xl hover:shadow-md hover:shadow-[#ff8906d7]'><NavLink to="https://instagram.com/juan_pantoja_c?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target='_blank'><img src={instagram} alt="" /></NavLink></li>
                    <li className='w-12 shadow-sm shadow-[#ff8906d7] rounded-xl hover:shadow-md hover:shadow-[#ff8906d7]'><NavLink to="https://discord.com/login?redirect_to=%2Fchannels%2F%40me" target='_blank'><img src={discord} alt="" /></NavLink></li>
                </ul>
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-center items-center'>
            <img className='flex w-80 h-96 shadow-3xl border-solid border-[#ff8906] border-8 rounded-full' src={meImg} alt="" />
        </div>
        
    </section>
  )
}
