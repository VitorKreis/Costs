import { Link } from 'react-router-dom'
import './ProjectCard.css'
import {BsFillPencilFill } from 'react-icons/bs'
import {FaTrash } from 'react-icons/fa'
function ProjectCard({name, budget, id, category, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Budget:</span> R${budget}
            </p>
            <p className='category_text'>
                <span className={`${category}`}></span> {category}
            </p>
            <div className='project_action'>
                <Link to={`/Project/${id}`}>
                <BsFillPencilFill /> Edit
                </Link>
                <button onClick={remove}>
                    <FaTrash /> Remove
                </button>
            </div>
        </div>
    )
}


export default ProjectCard