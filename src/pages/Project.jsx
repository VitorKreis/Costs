
import Message from "../layout/Message"

import {useLocation} from 'react-router-dom'
import { useState, useEffect } from "react"
import LinkedButton from '../layout/LinkedButton'

import './Project.css'
import ProjectCard from "../project/ProjectCard"
import Loading from "../layout/Loading"

function Projects(){
    const [projects, setProjects] = useState([])
    
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()

    let message = 'Project created successfully'
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(() =>{
            fetch('http://localhost:4300/project',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

        }).then((resp)=>resp.json()).then((data) =>{
            setProjects(data)
            setRemoveLoading(true)
        }).catch(error => console.log(error))
        }, 1700)
    }, [])


    function RemoveProjects(id){
        fetch(`http://localhost:4300/project/${id}`,{
            method: 'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then(() =>{
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Project remove with success')
        }).catch(err => console.log(err))
    }

    return(
        <div className="project_container">
        <div className="title_container">
            <h1>Project</h1>
            <LinkedButton text="New Project" to='/NewProjects' />
        </div>
        <hr></hr>
        {message && <Message msg={message} type="success" />}
        {projectMessage && <Message msg={projectMessage} type="success" />}
        <br></br>
        <div className="container">

           {projects.length > 0 && (
            projects.map((project) => (
                <ProjectCard name={project.name} id={project.id} budget={project.budget}
                category={project.category.name} key={project.id} handleRemove={RemoveProjects} />
            ))
           )}
           {!removeLoading && <Loading />}
           {removeLoading && projects.length ===0 && (
            <p>You don't have none projects created</p>
           )}

        </div>    
        </div>
    )
}


export default Projects