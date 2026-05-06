import "./Services.css"
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

const cardVariants = {
   hidden: {y: 30, opacity: 0},
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         delayChildren: 0.25,
         staggerChildren: 0.2,
         duration: 0.8,
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


export default function Services(props){
    return(
        <motion.section 
            className="services" 
            ref={props.ref}
            variants= {containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once:true, amount:0.3 }}
         >
            <motion.header
               variants={titleVariants}
            >Services
            </motion.header>
            <motion.article 
               className="servicesList"
            >

                <motion.div variants={cardVariants}>
                  <motion.h2  variants={titleVariants}> Full-Stack Web Development</motion.h2>
                  <motion.p variants={textVariants}>Building full-stack web applications using React, Node.js, express.js, and REST APIs</motion.p>
                </motion.div>

                <motion.div variants={cardVariants}>
                   <motion.h2 variants={titleVariants}>Frontend Development</motion.h2>
                   <motion.p variants={textVariants}>Creating responsive and interactive user interfaces using React</motion.p>
                </motion.div>

                <motion.div variants={cardVariants}>
                   <motion.h2 variants={titleVariants}>Backend Development</motion.h2>
                   <motion.p variants={textVariants}>Building RESTful APIs, handling authentication, and server-side logic with Node.js and Express</motion.p>
                </motion.div>

                <motion.div variants={cardVariants}>
                   <motion.h2 variants={titleVariants}>UI Implementation</motion.h2>
                   <motion.p variants={textVariants}>Translating Figma or design ideas into clean, functional web interfaces</motion.p>
                </motion.div>

                <motion.div variants={cardVariants}>
                   <motion.h2 variants={titleVariants}>Deployment</motion.h2>
                   <motion.p variants={textVariants}>Deploying applications using Vercel, Netlify, and GitHub Pages</motion.p>
                </motion.div>

                <motion.div variants={cardVariants}>
                   <motion.h2 variants={titleVariants}>Bug Fixing & Improvements</motion.h2>
                   <motion.p variants={textVariants} viewport={{ once:true, amount:0.3 }}>Debugging issues, improving performance, and refining existing features</motion.p>
                </motion.div>

            </motion.article>
        </motion.section>
    )
}