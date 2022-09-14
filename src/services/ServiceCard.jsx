import './ServiceCard.css'
import {FaTrash } from 'react-icons/fa'

function ServiceCard({id, name, cost, description, handleRemove}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }
    return(
        <div className='service_card'>
            <h4>{name}</h4>
            <p>
                <span>Cost:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className='service_action'>
                <button onClick={remove}>
                        <FaTrash /> Remove
                </button>
            </div>
        </div>
    )
}

export default ServiceCard