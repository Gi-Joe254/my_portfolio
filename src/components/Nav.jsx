import { FaBars } from 'react-icons/fa'
import './Nav.css'
export default function Nav(){
    return(
        <nav>
            <FaBars />
            <span>Logo</span>
            <button>Contact Me</button>
        </nav>
    )
}