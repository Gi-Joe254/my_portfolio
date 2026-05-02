import "./About.css"
import { FaRegArrowAltCircleDown, FaReact, FaHtml5, FaCss3, FaGithub, FaGit, FaFigma } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import my_photo from "../images/my_pic.png"
import { FaNodeJs } from "react-icons/fa6"

export default function About(props){
    return(
        <section ref= {props.ref} className="about">
            <header>About Me</header>
            <article className="aboutAll">
                <div className="imgContainer">
                    <img className="myPhoto" src={my_photo} alt="a photo of me" />
                </div>
                <div className="aboutText">
                <p>
                    I am a full-stack web developer with a strong focus on building clean, responsive, and user-centered web applications. I specialize in developing modern front-end interfaces using React, while also building and integrating backend services and APIs to deliver complete, functional digital solutions. I have experience working with version control systems such as Git and GitHub, as well as deploying applications using platforms like Netlify and Render. I am passionate about transforming ideas into scalable, efficient, and accessible web applications, and I am continuously improving my skills across both frontend and backend development.
                </p>
                    <a href="/files/my_cv.pdf" rel="noopener noreferrer">
                        <button className="cvBtn"><FaRegArrowAltCircleDown className="arrowDown" /> Download CV</button>
                    </a>
                </div>
            </article>
            
            <article className="skills">
                <figure>
                    <FaNodeJs className="skillIcon"/>
                    <figcaption>Node.js</figcaption>
                </figure>
                <figure>
                    <FaReact className="skillIcon"/>
                    <figcaption>React</figcaption>
                </figure>
                <figure>
                    <SiJavascript className="skillIcon"/>
                    <figcaption>Javascript</figcaption>
                </figure>
                <figure>
                    <FaHtml5 className="skillIcon"/>
                    <figcaption>Html5</figcaption>
                </figure>
                <figure>
                    <FaCss3 className="skillIcon"/>
                    <figcaption>Css3</figcaption>
                </figure>
                <figure>
                    <FaGithub className="skillIcon"/>
                    <figcaption>Github</figcaption>
                </figure>
                <figure>
                    <FaGit className="skillIcon"/>
                    <figcaption>Git</figcaption>
                </figure>
                <figure>
                    <FaFigma className="skillIcon"/>
                    <figcaption>Figma</figcaption>
                </figure>
                    
            </article>
        </section>
    )
}