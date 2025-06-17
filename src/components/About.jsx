import "./About.css"
import { FaRegArrowAltCircleDown, FaReact, FaHtml5, FaCss3, FaGithub, FaGit, FaFigma } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"

export default function About(){
    return(
        <section className="about">
            <header>About Me</header>
            <img src="" alt="a photo of me" />
            <p>I'm a passionate front-end developer with a strong focus on creating clean, responsive, and user-friendly websites. I specialize in building with React, translating designs into functional, mobile-first interfaces. With experience in version control (Git/Github) and deployment platforms like Netlify, I enjoy turning ideas into real-world digital experiences. I'm continuously learning and refining my skills to deliver fast, accessible, and modern web applications</p>
            <button className="cvBtn"><FaRegArrowAltCircleDown className="arrowDown" /> Download CV</button>
            <article className="skills">
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