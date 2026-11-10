import { Link } from "react-router-dom";
import aboutimg from "./home-headshot.jpeg";
import projectsimg from "./projectsimg.jpeg";
import contactimg from "./Apple_Mail-512.webp";
export default function Home(){
    return(
    <div className="home-page">
        <div className="text-fade-in page-header">
            <p className="projects-eyebrow">AIDAN HONG</p>
            <h1>Hey there!</h1>
            <p>I’m Aidan, a Computer Science student at Georgia Tech focused on Systems Architecture and Artificial Intelligence.</p>
        </div>
        <div className="quicklinks">
            <div className="quicksection">
                <Link to="/about" aria-label="About Aidan">
                    <img className="image home-headshot" src={aboutimg} alt="" />
                    <span className="home-card-label">About Me <span aria-hidden="true">↗</span></span>
                </Link>
            </div>
            <div className="quicksection">
                <Link to="/projects" aria-label="Explore my projects">
                    <img className="image" src={projectsimg} alt="" />
                    <span className="home-card-label">Projects <span aria-hidden="true">↗</span></span>
                </Link>
            </div>
            <div className="quicksection">
                <Link to="/contact" aria-label="Contact Aidan">
                    <img className="image mail-card-image" src={contactimg} alt="" />
                    <span className="home-card-label">Contact Me! <span aria-hidden="true">↗</span></span>
                </Link>
            </div>
        </div>
    </div>
    );
}
