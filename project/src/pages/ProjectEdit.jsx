
import './ProjectEdit.css'

import { useEffect,  useState } from 'react'
import {useParams} from 'react-router-dom'

import {parse, v4 as uuidv4} from 'uuid'

import Loading from '../layout/Loading'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../services/ServiceForm'
import ServiceCard from '../services/ServiceCard'

function ProjectEdit(){

const {id} = useParams()
const [projects, setProjects] = useState([])
const [services, setServices] = useState([])
const [ProjectEdit, setProjectEdit] = useState(false)
const [ServiceEdit, setServiceEdit] = useState(false)
const [message, setMessage] = useState()
const [type, setType] = useState()

useEffect(() => {
    setTimeout(()=>{
        fetch(`http://localhost:4300/project/${id}`,{
        method: 'GET', 
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then((resp) => resp.json()).then((data) => {
        setProjects(data)
        setServices(data.service)
    }).catch(err => console.log(err))
    }, 1500)

}, [id])


function EditForm(projects){
    setMessage('')
    if(projects.budget < projects.cost){
        setMessage('The budget cannot be greater than the cost')
        setType('error')
        return false
        }

    fetch(`http://localhost:4300/project/${id}`,{
        method : 'PATCH', 
        headers : {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify(projects)
    }).then((resp) => resp.json()).then((data) =>{
        setProjects(data)
        setProjectEdit(false)
        setMessage('Update with success')
        setType('success')
    }).catch(erro => console.log(erro))

}


function createService(projects){
    //last Service
    const lastService = projects.service[projects.service.length - 1]

    lastService.id = uuidv4()

    //last Cost
    const lastServiceCost = lastService.cost


    let newCost = parseFloat(projects.cost) + parseFloat(lastServiceCost)

    //maximum value validation
    if(newCost > parseFloat(projects.budget)) {
        setMessage('Exceeded budget check the value of the service')
        setType('error')
        projects.service.pop()
        return false
    }


    //add service costs to project total costs
    projects.cost = newCost

    //update project
    fetch(`http://localhost:4300/project/${id}`, {
          method : 'PATCH', 
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(projects)
    }).then((resp) => resp.json()).then((data)=>{
        setServiceEdit(false)
    }).catch(error => console.log(error))

}

    function removeService(id, cost){
        
        const serviceUpdated = projects.service.filter(
            (services) => services.id !== id
        )


        
        
        const projectUpdated = projects

        projectUpdated.service = serviceUpdated

        
        

        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        console.log(projectUpdated.cost)

        fetch(`http://localhost:4300/project/${projectUpdated.id}`,  {
            method : 'PATCH', 
            headers : {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(projectUpdated)
      }).then((resp) => resp.json()).then((data) => {
        setProjects(projectUpdated)

        setServices(serviceUpdated)
      }).catch(error => console.log(error))
}

function toggleProjectForm(){
    setProjectEdit(!ProjectEdit)
}
function toggleServiceForm(){
    setServiceEdit(!ServiceEdit)
}

    return(
        <div className='project_details'>
        {message && <Message msg={message} type={type} />}
        {projects.name ? (
            <div className='details_container'>
            <h1>Project: {projects.name}</h1>
            <button className='btn' onClick={toggleProjectForm}>
                {!ProjectEdit ? 'Edit project' : 'Close'}
                </button>
                
                {!ProjectEdit ? (
                <div className='project_info'>
                    <p>
                        <span>Category:</span> {projects.category.name}     
                    </p>
                    <p>
                        <span>Total Budget:</span> R${projects.budget}
                    </p>
                    <p>
                        <span>Total Spend:</span> R${projects.cost}
                    </p>
                </div>
                ): (
                <div className='project_info'>
                    <ProjectForm projectData={projects} BtnText="Update" handleSubmit={EditForm} />
                </div> 
                )}
            <div className='service_form_container'>
                <button className='btn' onClick={toggleServiceForm}>
                {!ServiceEdit ? 'Add Service' : 'Close'}
                </button>
                <div className='project_info'>
                    {ServiceEdit ? (
                    <div>
                        <h2>Add Service:</h2>
                        <ServiceForm handleSubmit={createService} textBtn="Add Service" projectData={projects} />
                    </div>
                    ) : (
                    <div>
                        <h2>Services:</h2>
                        {services.length > 0 &&
                        services.map((service) => (
                            <ServiceCard id={service.id} name={service.name} cost={service.cost}
                            description={service.description} key={service.id} handleRemove={removeService} />
                        )) 
                        }

                        {services.length === 0 && <p>Don't have services registered</p>}
                    </div>
                    ) }
                </div>
                
            </div>

            </div>
            
                    ) : (
            <Loading />
        )}
        </div>
    )

}

export default ProjectEdit