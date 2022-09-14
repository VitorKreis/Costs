import ProjectForm from '../project/ProjectForm'
import './NewProject.css'

import { Navigate, useNavigate } from 'react-router-dom';

function NewProject(){

    const navigate = useNavigate()


    function CreatePost(project){
        //Initialize cost and service
        project.cost = 0
        project.service = []

        fetch("http://localhost:4300/project", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json()).then((data) =>{
            console.log(data)
            //Redirect
            navigate("/Project")
        }).catch(err => console.log(err))

    }
    return(
        <div className='NewProject_Container'>
            <h1>New Project</h1>
            <p>Create you project and add you service</p>
            <ProjectForm handleSubmit={CreatePost} BtnText="Create" />
        </div>
    )
}


export default NewProject