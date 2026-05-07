import "./Connect.css"
import { useRef } from "react"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.25
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

const cardVariants = {
   hidden: {y: 30, opacity: 0},
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.8,
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
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

export default function Connect(props){
    return(
        <motion.section 
            ref = {props.ref} 
            className="connect" 
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount: 0.3}}
        >
            <motion.header variants={titleVariants}>Connect with me</motion.header>
            <form className="connectForm">
                <motion.input variants={cardVariants} type="text" name="name" placeholder="Name"/>
                <motion.input variants={cardVariants} type="email" name="email" placeholder="Email"/>
                <motion.input variants={cardVariants} type="tel" name="phone" placeholder="Phone Number"/>
                <motion.select variants={cardVariants} name="service" defaultValue=''>
                    <option value='' disabled hidden>--Select Service--</option>
                    <option value='web-dev'>Front-End Web Development</option>
                    <option value='UI'>UI Implementation</option>
                    <option value='optimization'>Website Optimization</option>
                    <option value='hosting'>Web Hosting and Deployment</option>
                    <option value='landing'>Landing Pages</option>
                    <option value='maintenance'>Website Maintenance</option>
                </motion.select>
                <motion.textarea variants={cardVariants} name="projectDetails" placeholder="Project Details" rows='5' />
                <motion.button type="submit" variants={buttonVariants}>Send</motion.button>
            </form>
        </motion.section>
    )
    
}