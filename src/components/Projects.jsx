import ProjectCard from "./ProjectCard"
import "./Projects.css"
import finImg from "../images/ProjectFin.png"
import recImg from "../images/ProjectRecipe.png"
import shopImg from "../images/shopImg.png"
import adminImg from "../images/adminImg.png"


export default function Projects(){
    return(
        <section className="projects">
            <header>Projects</header>
            <div>
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
            </div>
        </section>
    )
}