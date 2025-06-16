import { FaBars } from 'react-icons/fa'
import './Nav.css'
export default function Nav(){
    return(
        <nav>
            <FaBars size='20px' className='menuIcon'/>
            <span>Logo</span>
            <button>Contact Me</button>
        </nav>
    )
}