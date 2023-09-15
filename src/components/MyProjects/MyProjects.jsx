import React from 'react'
import { Header } from '../Header/Header.jsx'
import projects from '../../assets/projects.js'
import { NavLink } from 'react-router-dom'
import { Footer } from '../Footer/Footer.jsx'

export const MyProjects = () => {
  return (
    <>
      <Header />
      <section className='flex justify-center items-center h-100 bg-[#26252c]'>
        <div className="flex justify-center items-center w-screen">
          <div className="tarjet flex gap-10 p-6">
            {projects.map((project) => (
              <div
                className="bg-[#0f0e17] w-11/12 flex flex-col justify-center py-4 items-center rounded-md border-solid border-2 border-[#ff8906d7]"
                key={project.id}
              >
                <h1 className="text-4xl font-semibold p-2 text-[#fff]">
                  {project.tittle}
                </h1>
                <img className="h-[300px]" src={project.img} alt="projects" />
                <h2 className="text-[#fff]">{project.description}</h2>
                
                  <NavLink className="w-[30%] my-3 text-center rounded-none text-xl p-2 hover:bg-[#ff8906d7] hover:rounded-xl hover:text-black duration-300" to={project.url} target="_blank">
                    View
                  </NavLink>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
