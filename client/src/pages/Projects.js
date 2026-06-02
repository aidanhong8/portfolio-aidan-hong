import {Link} from "react-router-dom";
import csvimage from "./csvstudyimage.png";
import memory from"./memory.png";
import weather from "./weather.png";
import dbfbla from "./dbfbla.png";
import lockedin from "./chat.png";
import dbfbla2 from "./dbfbla2.png";
import edd from "./edd.jpeg";
import cross from "./easycross.png";
export default function Projects(){
    return(
    <div class="content">
        <h1 class="center">Projects</h1>
        <div class="side">
            <div class="text">
                <h2>EasyCross</h2>
                <p>Helping elders cross roads safely</p>
                <p>For this project, we used an ESP32S3 along with a classification model to help ensure the elderly do not veer off the crosswalk. By using temporal smoothing to account for false positives, we were able to make a model that accurately predicts if a person is on the crosswalk or not.</p>
                <h3>Skills Used</h3>
                <li>C++</li>
                <li>Clsasification models</li>
            </div>
            <div class="media-container">
                <div classname="image">
                    <img className="medium" src={cross} alt="easycross"/>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>HalloweenTracker</h2>
                <p>Addressing safety in communities. Built with ESP32, CAD, and Swift.</p>
                <p>For this project, we created a CAD for the housing. Then, we used an ESP32 with iBeacon to connect with phones and GATT to advertise specific services the phone may need. Finally, I made a swift app to present information in a user friendly and human centric format.</p>
                <a href="https://github.com/GSWForever8/HalloweenTracker" target="_blank">Link to GitHub Repo</a>
                <h3>Skills Used</h3>
                <li>Swift</li>
                <li>Soldering</li>
                <li>C++</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={edd} alt="lockedin" />
                </div>
            </div>

        </div>
        <div class="side">
            <div class="text">
                <h2>DBHS FBLA Website 2.0</h2>
                <p>The upcoming new official website for DBHS FBLA. Debuting September 2025.</p>
                <p>For this website, we used a frontend with smooth transitions to enhance the user experience. We use the OpenAI GPT-5 API to create quiz questions, and we formatted the response to allow for the code to parse it and create questions. We also created a forum to allow for members to communicate, with votes, posts, and comments baked into its core funcitonality.</p>
                <a href="https://github.com/myName833/DBHS-FBLA-Website" target="_blank">Link to GitHub Repo</a>
                <h3>Skills Used</h3>
                <li>OpenAI API</li>
                <li>Flask</li>
                <li>React</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={dbfbla2} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/STxqJcr_Juo"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </div>
        <div class="side">
            <div class="text">
                <h2>LockedIn</h2>
                <p>AI Powered tool to empower students. This project combats inequality in our community by providing a personalized AI tutor for each and every student.</p>
                <p>For this project, we accomplished this through a 2 step solution: a grade analyzer and a chatbot. Both call an API to get a response, but the grade analyzer goes a step further by using Python's data analysis to create a personalized study plan per student.</p>
                <a href="https://github.com/GSWForever8/congressapp24" target="_blank">Link to GitHub Repo</a>
                <h3>Skills Used</h3>
                <li>Meta Llama API</li>
                <li>Flask</li>
                <li>Skikit Learn</li>
                <li>Matplotlib</li>
                <li>MERN Stack</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={lockedin} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://drive.google.com/file/d/1yYyR5ou4oNcvmcWmRlQCbWbpZg9yxROP/preview"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>DBHS FBLA Website</h2>
                <p>The Official Website of DBHS FBLA. This website uses React.JS for its frontend. It also calls an API to Google Drive to retrieve resources.</p>
                <a href="https://dbhsfbla.onrender.com" target="_blank">Link to website</a>
                <h3>Skills Used</h3>
                <li>Google Oauth</li>
                <li>Google Drive API</li>
                <li>MERN Stack</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={dbfbla} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/wXoCU0PCgy8"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>JS Flashcard Game</h2>
                <p>Simple flashcard game, 6x3 and 6x6 options. This website uses JS to create the cards dynamically as well as to create the frotnend.</p>
                <a href="https://flashcardsahong.netlify.app" target="_blank">Link to website</a>
                <h3>Skills used</h3>
                <li>HTML</li>
                <li>JS</li>
                <li>CSS</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={memory} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/1FS4XOoQ338"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="text">
                <h2>CSVStudy</h2>
                <p>Designed to help students study using CSV files. The program takes in a CSV file formatted a specific way and creates a quiz with terms and definitions.</p>
                <a href="https://github.com/GSWForever8/CSVStudy" target="_blank">Link to GitHub Repository</a>
                <h3>Skills used</h3>
                <li>Python</li>
                <li>File handling</li>
                <li>Tkinter</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={csvimage} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/q5vfzXKBdv4"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="text">
            <h2>Weather App</h2>
                <p>Worked with an API and react to create basic and clean weather app. This website calls an API to get weather information for a specific city.</p>
                <a href="https://ahongweather.netlify.app" target="_blank">Link to website</a>
                <h3>Skills used</h3>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>APIs</li>
            </div>
            <div className="media-container">
                <div className="image">
                    <img className="medium" src={weather} alt="lockedin" />
                </div>
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/GQpfp3g9piU"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
    );
}
