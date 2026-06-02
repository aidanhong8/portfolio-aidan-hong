import headshot from "./Headshot.png";
import { Link, Route, Routes } from "react-router-dom";
import aboutimg from "./head.jpg";
import projectsimg from "./projectsimg.jpeg";
import contactimg from "./Apple_Mail-512.webp";
export default function Home(){
    return(
    <div class="contentwrap">
        <div class="text-fade-in">
            <h1>Hey there!</h1>
            <h3>My name is Aidan Hong. I am a freshman at Georgia Tech</h3>
            <p></p>
        </div>
        <div class="quicklinks">
            <div class="quicksection">
                <Link to="/about"><img class="image"src={aboutimg}></img></Link>
                <p>About Me</p>
            </div>    
            <div class="quicksection"> 
                <Link to="/projects"><img class="image"src={projectsimg}></img></Link>
                <p>Projects</p>
            </div>  
            <div class="quicksection">
                <Link to="/contact"><img class="image"src={contactimg}></img></Link>
                <p>Contact Me!</p>
            </div>      
        </div>
    </div>
    );
}