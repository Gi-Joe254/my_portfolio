import { FaGithub, FaX } from "react-icons/fa6"
import "./Hero.css"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"


export default function Hero(props){
    return(
        <section ref={props.ref} className="hero">
            <p>Hi I am</p>
            <h6>Joseph Gacheru</h6>
            <h1>Fullstack Web Developer</h1>
            <ul className="socials">
                <li><a href="https://www.linkedin.com/in/joseph-gacheru-863083219/" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://github.com/Gi-Joe254" target="_blank"><FaGithub /></a></li>
                <li><a><FaX /></a></li>
            </ul>
            <article>
                <button className="contactBtn">Contact Me</button>
                <a href="/files/my_cv.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="cvBtn">Download CV</button>   
                </a>                
            </article>
        </section>
        
    )    
}