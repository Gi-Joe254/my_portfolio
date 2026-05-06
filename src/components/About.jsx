import "./About.css"
import { FaRegArrowAltCircleDown, FaReact, FaHtml5, FaCss3, FaGithub, FaGit, FaFigma } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import my_photo from "../images/my_pic.png"
import { FaNodeJs } from "react-icons/fa6"
import { motion } from "framer-motion"

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
            delay: 1,
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

const imageVariants = {
    hidden: {opacity: 0, x: 50},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.2,
            duration: 0.8
        }
    }
}

const articleVariants = {
    visible: {
        transition: {
            delayChildren: 2,
            staggerChildren: 0.15
        }
    }
}

const cardVariants = {
   hidden: {y: 30, opacity: 0},
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1.2,
         ease: 'easeOut'
      }
   }
}

export default function About(props){
    return(
        <motion.section 
            ref= {props.ref} 
            className="about"
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once:true, amount:0.3 }}

        >
            <motion.header variants={titleVariants}>About Me</motion.header>
            <article className="aboutAll">
                <motion.div variants={imageVariants} className="imgContainer">
                    <img className="myPhoto" src={my_photo} alt="a photo of me" />
                </motion.div>
                <div className="aboutText">
                <motion.p variants={textVariants}>
                    I am a full-stack web developer with a strong focus on building clean, responsive, and user-centered web applications. I specialize in developing modern front-end interfaces using React, while also building and integrating backend services and APIs to deliver complete, functional digital solutions. I have experience working with version control systems such as Git and GitHub, as well as deploying applications using platforms like Netlify and Render. I am passionate about transforming ideas into scalable, efficient, and accessible web applications, and I am continuously improving my skills across both frontend and backend development.
                </motion.p>
                    <a  
                        href="/files/my_cv.pdf" 
                        rel="noopener noreferrer"
                    >
                        <motion.button variants={buttonVariants} className="cvBtn"><FaRegArrowAltCircleDown className="arrowDown" /> Download CV</motion.button>
                    </a>
                </div>
            </article>
            
            <motion.article 
                className="skills"
                variants={articleVariants}
                viewport={{once: true, amount: 0.3}}
            >
                <motion.figure variants={cardVariants} >
                    <FaNodeJs className="skillIcon"/>
                    <figcaption>Node.js</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaReact className="skillIcon"/>
                    <figcaption>React</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <SiJavascript className="skillIcon"/>
                    <figcaption>Javascript</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaHtml5 className="skillIcon"/>
                    <figcaption>Html5</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaCss3 className="skillIcon"/>
                    <figcaption>Css3</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaGithub className="skillIcon"/>
                    <figcaption>Github</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaGit className="skillIcon"/>
                    <figcaption>Git</figcaption>
                </motion.figure>
                <motion.figure variants={cardVariants} >
                    <FaFigma className="skillIcon"/>
                    <figcaption>Figma</figcaption>
                </motion.figure>
                    
            </motion.article>
        </motion.section>
    )
}