import "./Services.css"

export default function Services(props){
    return(
        <section className="services" ref={props.ref}>
            <header>Services</header>
            <article className="servicesList">

                <div>
                   <h2>Full-Stack Web Development</h2>
                   <p>Building full-stack web applications using React, Node.js, express.js, and REST APIs</p>
                </div>

                <div>
                   <h2>Frontend Development</h2>
                   <p>Creating responsive and interactive user interfaces using React</p>
                </div>

                <div>
                   <h2>Backend Development</h2>
                   <p>Building RESTful APIs, handling authentication, and server-side logic with Node.js and Express</p>
                </div>

                <div>
                   <h2>UI Implementation</h2>
                   <p>Translating Figma or design ideas into clean, functional web interfaces</p>
                </div>

                <div>
                   <h2>Deployment</h2>
                   <p>Deploying applications using Vercel, Netlify, and GitHub Pages</p>
                </div>

                <div>
                   <h2>Bug Fixing & Improvements</h2>
                   <p>Debugging issues, improving performance, and refining existing features</p>
                </div>

            </article>
        </section>
    )
}