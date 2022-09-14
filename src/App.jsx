import './App.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


//Imports das Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Company from "./pages/Company"
import NewProjects from "./pages/NewProjects"
import Project from './pages/Project'

//Import Layouts
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ProjectEdit from './pages/ProjectEdit'



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Footer />
        <div  className='Container'>
          <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route path='/Contact' element={<Contact />} ></Route>
            <Route path='/Company' element={<Company />} ></Route>
            <Route path='/Project' element={<Project />} ></Route>
            <Route path='/NewProjects' element={<NewProjects />} ></Route>
            <Route path='/Project/:id' element={<ProjectEdit />} ></Route>
          </Routes>
        </div>
        
      </Router>
    </>
    
  )
}

export default App
