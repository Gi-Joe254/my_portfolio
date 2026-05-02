import "./About.css"
import { FaRegArrowAltCircleDown, FaReact, FaHtml5, FaCss3, FaGithub, FaGit, FaFigma } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import my_photo from "../images/my_pic.png"
<<<<<<< HEAD
import { FaNodeJs } from "react-icons/fa6"
=======
>>>>>>> 05df71998e981d019afb6722f3b30baedcfe387d

export default function About(props){
    return(
        <section ref= {props.ref} className="about">
            <header>About Me</header>
            <article className="aboutAll">
                <div className="imgContainer">
                    <img className="myPhoto" src={my_photo} alt="a photo of me" />
                </div>
                <div className="aboutText">
<<<<<<< HEAD
                <p>
                    I am a full-stack web developer with a strong focus on building clean, responsive, and user-centered web applications. I specialize in developing modern front-end interfaces using React, while also building and integrating backend services and APIs to deliver complete, functional digital solutions. I have experience working with version control systems such as Git and GitHub, as well as deploying applications using platforms like Netlify and Render. I am passionate about transforming ideas into scalable, efficient, and accessible web applications, and I am continuously improving my skills across both frontend and backend development.
                </p>
=======
                    <p>I'm a passionate front-end developer with a strong focus on creating clean, responsive, and user-friendly websites. I specialize in building with React, translating designs into functional, mobile-first interfaces. With experience in version control (Git/Github) and deployment platforms like Netlify, I enjoy turning ideas into real-world digital experiences. I'm continuously learning and refining my skills to deliver fast, accessible, and modern web applications</p>
>>>>>>> 05df71998e981d019afb6722f3b30baedcfe387d
                    <a href="/files/my_cv.pdf" rel="noopener noreferrer">
                        <button className="cvBtn"><FaRegArrowAltCircleDown className="arrowDown" /> Download CV</button>
                    </a>
                </div>
            </article>
            
            <article className="skills">
                <figure>
<<<<<<< HEAD
                    <FaNodeJs className="skillIcon"/>
                    <figcaption>Node.js</figcaption>
                </figure>
                <figure>
=======
>>>>>>> 05df71998e981d019afb6722f3b30baedcfe387d
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