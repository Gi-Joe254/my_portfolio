import { FaGithub, FaX, FaLinkedin } from "react-icons/fa6"
import "./Hero.css"
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15
        }
    }
}

const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut'
        }
    }
}

const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

const hoverVariants = {
    hover: {
        scale: 1.15,
        transition: {
            duration: 0.2,
            ease: 'easeOut'
        }
    }
}

export default function Hero(props){
    return(
        <motion.section 
            ref={props.ref} 
            className="hero"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <motion.p variants={textVariants}>
                Hi I am
            </motion.p>

            <motion.h6 variants={textVariants}>
                Joseph Gacheru
            </motion.h6>

            <motion.h1 variants={titleVariants}>
                Fullstack Web Developer
            </motion.h1>

            <motion.ul 
                className="socials"
                variants={buttonVariants}   
            >
                <motion.li
                    variants={hoverVariants}
                    whileHover="hover"
                >
                    <a 
                        href="https://www.linkedin.com/in/joseph-gacheru-863083219/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </motion.li>

                <motion.li
                    variants={hoverVariants}
                    whileHover="hover"
                >
                    <a 
                        href="https://github.com/Gi-Joe254" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                </motion.li>

                <motion.li
                    variants={hoverVariants}
                    whileHover="hover"
                >
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaX />
                    </a>
                </motion.li>
            </motion.ul>

            <motion.article variants={buttonVariants}>
                <button className="contactBtn" onClick={props.goToConnect}>
                    Contact Me
                </button>

                <a 
                    href="/files/my_cv.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button className="cvBtn">Download CV</button>   
                </a>                
            </motion.article>
        </motion.section>
    )    
}