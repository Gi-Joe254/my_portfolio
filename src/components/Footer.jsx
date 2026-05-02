import { FaX } from "react-icons/fa6"
import "./Footer.css"
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaGithub, FaLinkedinIn } from "react-icons/fa"


export default function Footer(props){
    return(
        <footer>
            <header>JG</header>
            <nav>
                <ul>
                    <li onClick={props.goToHome}>Home</li>
                    <li onClick={props.goToServices}>Services</li>
                    <li onClick={props.goToAbout}>About Me</li>
                    <li>Projects</li>
                </ul>
            </nav>
            <article className="footerConnect">
                <header>Connect</header>
                <div>
                    <li><a href="https://www.linkedin.com/in/joseph-gacheru-863083219/" target="_blank"><FaLinkedinIn /></a></li>
                    <li><a href="https://github.com/Gi-Joe254" target="_blank"><FaGithub /></a></li>
                    <li><a><FaX /></a></li>
                </div>
                
            </article>
            <article className="lastLine">
                <p><FaEnvelope />  jgacheru504@gmail.com</p>
                <p><FaPhone />  +254 723 561 967</p>
            </article>

        </footer>
    )
}