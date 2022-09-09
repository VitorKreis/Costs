import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <nav className="nav">
            <Link to="/"><img src="/src/public/logo.png"/></Link>
            <ul className="list">   
                <li className='item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='item'>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className='item'>
                    <Link to="/Company">Company</Link>
                </li>
                <li className='item'>
                    <Link to='/Project'>Project</Link>
                </li>
            </ul>        
        </nav>
    )
}

export default Navbar