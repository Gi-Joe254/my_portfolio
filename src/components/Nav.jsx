import { FaBars } from 'react-icons/fa'
import './Nav.css'
import { useState } from 'react'
import { SiX } from 'react-icons/si'

export default function Nav(){

    const [menuPressed, setMenuPressed] = useState(false)
    function menuClick(){
        setMenuPressed (prev=>(!prev))
    }
    function goToContact(){
        console.log('contact btn pressed');
        
    }
    return(
        <div className='navContainer'>
            <nav className='navbarMobile'>
                {menuPressed ? 
                <SiX className="menuIcon" onClick={menuClick} /> :
                <FaBars size='20px' className='menuIcon' onClick={menuClick}/>
                }
                <span className='logo'>Logo</span>
                <button className='navBtn' onClick={goToContact}>Contact Me</button>
            </nav>
            {menuPressed ? 
            <div className='dropMenuList'>
                <div>Home</div>
                <div>Services</div>
                <div>About</div>
                <div>Connect</div>
            </div> : null}
            
            <nav className='navbarDesktop'>
                <span className='logo'>Logo</span>
                <div className='navLinks'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>About Me</div>
                    <div>Connect</div>
                </div>
                <button className='navBtn' onClick={goToContact}>Contact Me</button>
            </nav>
        </div>
    )
}