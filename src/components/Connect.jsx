import "./Connect.css"

export default function Connect(){
    return(
        <section className="connect">
            <header>Connect with me</header>
            <form className="connectForm">
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="tel" name="phone" placeholder="Phone Number"/>
                <select name="service" defaultValue=''>
                    <option value='' disabled hidden>--Select Service--</option>
                    <option value='web-dev'>Front-End Web Development</option>
                    <option value='UI'>UI Implementation</option>
                    <option value='optimization'>Website Optimization</option>
                    <option value='hosting'>Web Hosting and Deployment</option>
                    <option value='landing'>Landing Pages</option>
                    <option value='maintenance'>Website Maintenance</option>
                </select>
                <textarea name="projectDetails" placeholder="Project Details" rows='5' />
                <button type="submit">Send</button>
            </form>
        </section>
    )
    
}