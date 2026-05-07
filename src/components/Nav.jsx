import { FaBars } from 'react-icons/fa'
import './Nav.css'
import { useState } from 'react'
import { SiX } from 'react-icons/si'
import Hamburger from 'hamburger-react'
import { delay, motion } from 'framer-motion'

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            delayChildren: 0.2,
            staggerChildren: 0.25
        }
    }
}

const logoVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}
const navLinkVariants = {
    hover: {
        scale: 1.1, 
        originX: 0,
        color: '#dad7d7'
    },
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6, 
            type: 'tween'
        }
    }
}
const menuVariants = {
    hidden: {x: '-100vw'},
    visible: {
        x: 0,
        transition: {
            duration:1
        }
    }
}
export default function Nav(props){

    const [menuPressed, setMenuPressed] = useState(false)
       
    return(
        <motion.div 
            className='navContainer'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
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
                    variants={logoVariants}
                >
                    JG
                </motion.span>
                <motion.button 
                    className='navBtn' 
                    onClick={props.goToConnect}
                   variants={logoVariants}
                >
                    Contact Me
                </motion.button>
            </nav>
            {menuPressed ? 
            <motion.div 
                className='dropMenuList'
                variants={menuVariants}
            >
                <motion.div 
                    variants={navLinkVariants}
                    whileHover='hover'
                    onClick={props.goToHome}
                >Home
                </motion.div>

                <motion.div 
                    variants={navLinkVariants}
                    whileHover= 'hover'
                    onClick={props.goToServices}
                >Services
                </motion.div>
                
                <motion.div 
                    variants={navLinkVariants}
                    whileHover= 'hover'
                    onClick={props.goToAbout}
                >About
                </motion.div>
            
               <motion.div 
                    variants={navLinkVariants}
                    whileHover= 'hover'
                    onClick={props.goToProjects}
                >Projects
                </motion.div>
                
                <motion.div 
                    variants={navLinkVariants}
                    whileHover= 'hover'
                    onClick={props.goToConnect}
                    >Connect
                </motion.div>
            </motion.div> : null}
            
            <nav className='navbarDesktop'>
                <motion.span 
                    className='logo'
                   variants={logoVariants}
                >
                    JG
                </motion.span>

                <motion.div 
                    className='navLinks'
                    variants={navLinkVariants}
                >
                    <motion.div 
                        variants={navLinkVariants}
                        whileHover='hover' 
                        onClick={props.goToHome}
                    >Home
                    </motion.div>
                    <motion.div 
                        variants={navLinkVariants}
                        whileHover='hover' 
                        onClick={props.goToServices}
                    >Services
                    </motion.div>
                    <motion.div
                        variants={navLinkVariants} 
                        whileHover='hover' 
                        onClick={props.goToAbout}
                    >About Me
                    </motion.div>
                    <motion.div 
                        variants={navLinkVariants}
                        whileHover= 'hover'
                        onClick={props.goToProjects}
                    >Projects
                    </motion.div>
                    <motion.div
                        variants={navLinkVariants} 
                        whileHover='hover' 
                        onClick={props.goToConnect}
                    >Connect
                    </motion.div>
                </motion.div>
                <motion.button 
                    className='navBtn'
                    variants={logoVariants}                
                >
                    Contact Me
                </motion.button>
            </nav>
        </motion.div>
    )
}