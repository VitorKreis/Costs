import './Footer.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

function Footer(){

    return(
        <footer>
            <div className='footer'>
            <ul className='social_list'>
                <li>
                    <a href="https://www.instagram.com/vitorkrei/" target="_blank"><FaInstagram /></a>
                </li>
                <li> 
                    <a href="https://www.linkedin.com/in/vitorkreis/" target="_blank"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://github.com/VitorKreis" target="_blank"><FaGithub /></a>
                </li>
            </ul>
            <p className='copy'><span>Costs</span> &copy; 2021</p>
            </div>
        </footer>
    )

}

export default Footer