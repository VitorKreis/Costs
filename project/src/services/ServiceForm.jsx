import { useState } from "react"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

function ServiceForm({handleSubmit, textBtn, projectData}){
    const [service, setService ] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name] : e.target.value})
    }
    
    return(
        <form onSubmit={submit}>
            <Input
            type="text" text="Sevice Name" placeholder="Enter service name" name="name"
            handleOnChange={handleChange} />
            <Input type="number" text="Service Price" placeholder="Enter the price of the service" name="cost"
            handleOnChange={handleChange}/>
            <Input type="text" text="Sevice Description" placeholder="Enter the description of the service" name="description"
            handleOnChange={handleChange}/>
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ServiceForm