export default function ProjectCard(props){
    return(
        <div>
            <figure>
                <img src={props.projectImg} />
                <figcaption>{props.ProjectCaption}</figcaption>
            </figure>          

        </div>
    )
}