import abouthead from "./abouthead.JPG";
export default function About(){
    return (
        <div class="content">
            <div class="side">
                <div>
                <h1>About Me</h1>
                <p>Name: Aidan Hong</p>
                <p>Age: 18</p>
                <p>School: Georgia Institute of Technology</p>
                <p>Major: Computer Science</p>
            </div>
            <div>
                <img class="image"src={abouthead}></img>
            </div>
        </div>
            <h1>Highlights</h1>
            <ul>
                <li>Interned at Access Services</li>
                <li>USACO Silver</li>
                <li>FBLA NLC National Winner 5th Place Database Design and Applications 2024</li>
                <li>Prior Vice President of Competitive Events at DBHS FBLA</li>
                <li>D26 Saber Fencer + L1 Saber Referee</li>
            </ul>
            <h1>Current Skills</h1>
            <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Flask</li>
                <li>MERN</li>
                <li>SwiftUI</li>
                <li>Training YOLO models</li>
                <li>Training classification models</li>
                <li>Matplotlib</li>
                <li>APIs</li>
            </ul>
        </div>
    );
}
