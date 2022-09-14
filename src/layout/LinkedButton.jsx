import { Link } from "react-router-dom"
import "./LinkedButton.css"

function LinkedButton({to, text}){
    return(

        <Link className="Btn" to={to}>
        {text}
        </Link>

    )
}


export default LinkedButton

