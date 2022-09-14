import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"


import {useState, useEffect} from "react"


function ProjectForm({handleSubmit, BtnText, projectData}){

    const [categories, setcategories] = useState([])   
    const [project, setproject] = useState(projectData || {})

    useEffect(()=>{
        fetch('http://localhost:4300/categories',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => res.json()).then((data) =>{
        setcategories(data)
    }).catch(err => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setproject({...project, [e.target.name] : e.target.value})
    }
    function handleCategory(e){
        setproject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })

    }
    
    return(
        <form onSubmit={submit}>
            <Input text='Project Name' type="text" placeholder='Enter name project' name='name' handleOnChange={handleChange} value={project.name ? project.name : ''} />
            <Input text='Budget Project' type="number" placeholder='Enter project budget' name='budget' handleOnChange={handleChange} valeu={project.budget ? project.budget : ''} />
            <Select text="Select Categorie" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={BtnText}/>
        </form>
    )
}

export default ProjectForm