import { FaGithub, FaX } from "react-icons/fa6"
import "./Hero.css"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"
import { motion } from 'framer-motion'

export default function Hero(props){
    return(
        <section ref={props.ref} className="hero">
            <motion.p
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{delay: 0.2, type: 'tween', duration: 0.5}}
            >
                Hi I am
            </motion.p>
            <motion.h6
                initial={{x: '-100vw', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.5, type: 'tween', duration: 1}}
            >
                Joseph Gacheru
            </motion.h6>
            <motion.h1
                initial={{opacity: 0, scaleZ: -20}}
                animate={{opacity: 1, scaleZ: 0}}
                transition={{delay: 0.2, type: 'tween', duration: 2}}
            >
                Fullstack Web Developer
            </motion.h1>
            <motion.ul 
                className="socials"
                initial={{y: '100vh'}}
                animate={{y: 0}}
                transition={{delay: 1, type: 'tween', duration: 0.7}}
            >
                <motion.li
                    whileHover={{scale: 1.3, color: 'rgb(231, 109, 9)'}}
                    transition={{duration: 1}}
                >
                    <a href="https://www.linkedin.com/in/joseph-gacheru-863083219/" target="_blank">
                        <FaLinkedin />
                    </a>
                </motion.li>
                <motion.li
                    whileHover={{scale: 1.3, color: 'rgb(231, 109, 9)'}}
                    transition={{duration: 1}}
                >
                    <a href="https://github.com/Gi-Joe254" target="_blank"><FaGithub /></a>
                </motion.li>
                <motion.li
                    whileHover={{scale: 1.3, color: 'rgb(231, 109, 9)'}}
                    transition={{duration: 1}}
                >
                    <a><FaX /></a>
                </motion.li>
            </motion.ul>
            <motion.article
                initial={{y: '100vh'}}
                animate={{y: 0}}
                transition={{delay: 1, type: 'tween', duration: 0.5}}
            >
                <button className="contactBtn" onClick={props.goToConnect}>Contact Me</button>
                <a href="/files/my_cv.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="cvBtn">Download CV</button>   
                </a>                
            </motion.article>
        </section>
        
    )    
}