import ProjectCard from "./ProjectCard"
import "./Projects.css"

export default function Projects(){
    return(
        <section className="projects">
            <header>Projects</header>
            <ProjectCard 
                projectImg=''
                projectCaption="Project 1"
            />
            <ProjectCard 
                projectImg=''
                projectCaption="Project 2"
            />
            <ProjectCard 
                projectImg=''
                projectCaption="Project 3"
            />
            <ProjectCard 
                projectImg=''
                projectCaption="Project 3"
            />
        </section>
    )
}