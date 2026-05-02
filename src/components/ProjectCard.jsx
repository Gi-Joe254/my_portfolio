import { ArrowDownRight, Home } from "lucide-react"
import "./ProjectCard.css"
export default function ProjectCard({description, projectCaption, projectImg, link}){
    return(
        <div className="projectCard">
            
            <img src={projectImg} />
            <span>
                {projectCaption} 
                <button
                    onClick={()=> {window.open(link, '_blank')}}
                >
                    <ArrowDownRight />
                </button>
            </span> 
            <p>{description}</p>       
        </div>
    )
}