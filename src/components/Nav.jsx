import { FaBars } from 'react-icons/fa'
import './Nav.css'
import { useState } from 'react'
import { SiX } from 'react-icons/si'

export default function Nav(props){

    const [menuPressed, setMenuPressed] = useState(false)
    
    function menuClick(){
        setMenuPressed (prev=>(!prev))
    }
   
    return(
        <div className='navContainer'>
            <nav className='navbarMobile'>
                {menuPressed ? 
                <SiX className="menuIcon" onClick={menuClick} /> :
                <FaBars size='20px' className='menuIcon' onClick={menuClick}/>
                }
                <span className='logo'>Logo</span>
                <button className='navBtn'>Contact Me</button>
            </nav>
            {menuPressed ? 
            <div className='dropMenuList'>
                <div onClick={props.goToHome}>Home</div>
                <div onClick={props.goToServices}>Services</div>
                <div onClick={props.goToAbout}>About</div>
                <div onClick={props.goToConnect}>Connect</div>
            </div> : null}
            
            <nav className='navbarDesktop'>
                <span className='logo'>Logo</span>
                <div className='navLinks'>
                    <div onClick={props.goToHome}>Home</div>
                    <div onClick={props.goToServices}>Services</div>
                    <div onClick={props.goToAbout}>About Me</div>
                    <div onClick={props.goToConnect}>Connect</div>
                </div>
                <button className='navBtn'>Contact Me</button>
            </nav>
        </div>
    )
}