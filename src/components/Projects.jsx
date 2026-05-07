import ProjectCard from "./ProjectCard"
import "./Projects.css"
import finImg from "../images/ProjectFin.png"
import recImg from "../images/ProjectRecipe.png"
import shopImg from "../images/shopImg.png"
import adminImg from "../images/adminImg.png"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1.2,
            staggerChildren: 0.8
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

export default function Projects(){
    return(
        <motion.section 
            className="projects"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.3 }}
        >
            <motion.header variants={titleVariants}>Projects</motion.header>
            <motion.div variants={cardVariants}>
            <ProjectCard
                link= "https://trixx-solutions.vercel.app/"
                description= 'A business website for an electronics sales and repair shop.' 
                projectImg={shopImg}
                projectCaption="Electronics Sales and Repair Shop"
            />
            <ProjectCard
                link= "https://trixx-solutions.vercel.app/admin/dashboard"
                description= 'An admin dashborad for an electronics sales and repair shop.' 
                projectImg={adminImg}
                projectCaption="Electronics Sales Admin Dashboard"
            />
            <ProjectCard
                link= "https://gi-joe254.github.io/finance-tracker/"
                description= 'A personal finance and budgeting app that allows users to create acounts, save and edit transactions, calculate and save budgets, and compare transactions data.' 
                projectImg={finImg}
                projectCaption="Finance Tracker"
            />
            <ProjectCard
                link= "https://gi-joe254.github.io/recipe-generator/"
                description= 'An online recipe generator that allows users to input ingredients and submit to get custom recipes.' 
                projectImg={recImg}
                projectCaption="Recipe Generator"
            />
            </motion.div>
        </motion.section>
    )
}