import { FaX } from "react-icons/fa6"
import "./Footer.css"
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
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

const hoverVariants = {
    hover: {
        scale: 1.15,
        color: '#dad7d7',
        transition: {
            duration: 0.2,
            ease: 'easeOut'
        }
    }
}

export default function Footer(props){
    return(
        <motion.footer 
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.6}}
        >
            <motion.header variants={titleVariants}>JG</motion.header>
            <nav>
                <motion.ul variants={titleVariants}>
                    <motion.li variants={hoverVariants} whileHover='hover' onClick={props.goToHome}>Home</motion.li>
                    <motion.li variants={hoverVariants} whileHover='hover' onClick={props.goToServices}>Services</motion.li>
                    <motion.li variants={hoverVariants} whileHover='hover' onClick={props.goToAbout}>About Me</motion.li>
                    <motion.li variants={hoverVariants} whileHover='hover' onClick={props.goToProjects}>Projects</motion.li>
                </motion.ul>
            </nav>
            <article className="footerConnect">
                <motion.header variants={titleVariants}>Connect</motion.header>
                <motion.div variants={titleVariants}>
                    <motion.a variants={hoverVariants} whileHover='hover' href="https://www.linkedin.com/in/joseph-gacheru-863083219/" target="_blank"><FaLinkedinIn /></motion.a>
                    <motion.a variants={hoverVariants} whileHover='hover' href="https://github.com/Gi-Joe254" target="_blank"><FaGithub /></motion.a>
                    <motion.a variants={hoverVariants} whileHover='hover' href="x.com"><FaX /></motion.a>
                </motion.div>
                
            </article>
            <motion.article variants={titleVariants} className="lastLine">
                <motion.p variants={hoverVariants} whileHover='hover'><FaEnvelope />  jgacheru504@gmail.com</motion.p>
                <motion.p variants={hoverVariants} whileHover='hover'><FaPhone />  +254 723 561 967</motion.p>
            </motion.article>

        </motion.footer>
    )
}