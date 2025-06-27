import "./Hero.css"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"


export default function Hero(props){
    return(
        <section ref={props.ref} className="hero">
            <p>Hi I am</p>
            <h6>Joseph Gacheru</h6>
            <h1>React Web Developer</h1>
            <ul className="socials">
                <li><a><FaLinkedin /></a></li>
                <li><a><FaFacebook /></a></li>
                <li><a><FaInstagram /></a></li>
            </ul>
            <article>
                <button className="contactBtn">Contact Me</button>
                <button className="cvBtn">Download CV</button>
            </article>
        </section>
        
    )    
}