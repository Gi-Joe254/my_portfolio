import "./Footer.css"
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa"


export default function Footer(){
    return(
        <footer>
            <header>Logo</header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Me</li>
                    <li>Projects</li>
                </ul>
            </nav>
            <article className="footerConnect">
                <header>Connect</header>
                <div>
                    <a><FaLinkedin /></a>
                    <a><FaFacebook /></a>
                    <a><FaInstagram /></a>
                </div>
                
            </article>
            <p><FaEnvelope />  jgacheru504@gmail.com</p>
            <p><FaPhone />  +254 723 561 967</p>
        </footer>
    )
}