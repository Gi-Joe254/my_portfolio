import { FaBars } from 'react-icons/fa'
import './Nav.css'
export default function Nav(){
    return(
        <div className='navContainer'>
            <nav className='navbarMobile'>
                <FaBars size='20px' className='menuIcon'/>
                <span>Logo</span>
                <button>Contact Me</button>
            </nav>
            <nav className='navbarDesktop'>
                <span>Logo</span>
                <div className='navLinks'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>About Me</div>
                    <div>Connect</div>
                </div>
                <button>Contact Me</button>
            </nav>
        </div>
    )
}