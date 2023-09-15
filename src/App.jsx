import { Routes,Route } from 'react-router-dom'
import { Home } from './components/layouts/home/Home'
import { MyProjects } from './components/MyProjects/MyProjects.jsx'
import { Contact } from './components/Contact/Contact'
import { NotFound } from './components/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
          <Routes>
          <Route path="/" element = {< Home />} />          
          <Route path="/myprojects" element = {< MyProjects />} />     
          <Route path="/contact" element = {< Contact />} />    
          <Route path="*" element = {< NotFound />} />
          </Routes>
      </div>
    </>
  )
}

export default App
