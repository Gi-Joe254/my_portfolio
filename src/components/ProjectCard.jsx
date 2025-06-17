export default function ProjectCard(props){
    return(
        <div>
            <img src={props.projectImg} />
            <div>{props.projectCaption}</div>        

        </div>
    )
}