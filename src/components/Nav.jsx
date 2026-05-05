import { FaBars } from 'react-icons/fa'
import './Nav.css'
import { useState } from 'react'
import { SiX } from 'react-icons/si'
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'

export default function Nav(props){

    const [menuPressed, setMenuPressed] = useState(false)
       
    return(
        <div className='navContainer'>
            <nav className='navbarMobile'>
                <Hamburger 
                    toggled={menuPressed}
                    toggle={setMenuPressed}
                    size={20}
                    color='#9c9a9a'
                    duration={0.8}
                />
                
                <motion.span 
                    className='logo'
                    initial= {{x: '-100vw'}}
                    animate= {{x: 0}}
                    transition= {{delay: 0.2, duration: 0.5, type: 'tween'}}
                >
                    JG
                </motion.span>
                <motion.button 
                    className='navBtn' 
                    onClick={props.goToConnect}
                     initial= {{y: '-100vw'}}
                    animate= {{y: 0}}
                    transition= {{delay: 0.2, duration: 0.6, type: 'tween'}}
                
                >
                    Contact Me
                </motion.button>
            </nav>
            {menuPressed ? 
            <div className='dropMenuList'>
                <div onClick={props.goToHome}>Home</div>
                <div onClick={props.goToServices}>Services</div>
                <div onClick={props.goToAbout}>About</div>
                <div onClick={props.goToConnect}>Connect</div>
            </div> : null}
            
            <nav className='navbarDesktop'>
                <span className='logo'>JG</span>
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