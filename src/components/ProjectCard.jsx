
export default function ProjectCard(props){
    return(
        <div className="projectCard">
            <img src={props.projectImg} />
            <span>{props.projectCaption}</span>        
        </div>
    )
}