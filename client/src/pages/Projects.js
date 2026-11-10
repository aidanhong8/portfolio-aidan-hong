import { useEffect, useRef } from "react";
import csvimage from "./csvstudyimage.png";
import memory from"./memory.png";
import weather from "./weather.png";
import dbfbla from "./dbfbla.png";
import lockedin from "./chat.png";
import dbfbla2 from "./dbfbla2.png";
import edd from "./edd.jpeg";
import cross from "./easycross.png";
import nexus from "./fbla-nexus.png";
import timbre from "./timbre.png";

// Newest completion first; older undated projects retain their repository order.
const projects = [
  {
    "title": "Timbre",
    "role": "HackGT 13 · September 2026",
    "paragraphs": [
      "An accessible shopping demo with voice-based payment approval, designed for people with dysarthria.",
      "GPT-4o turns spoken or typed requests into a shopping list. At checkout, users verify their identity with repeatable sounds rather than relying on accurate speech transcription. SpeechBrain’s ECAPA-TDNN model compares voice recordings, with enrollment spread across alternating rounds to capture natural variation.",
      "Built with React, FastAPI, and SQLite. The demo uses Stripe test mode and the Visa CyberSource sandbox for payments."
    ],
    "url": "https://devpost.com/software/timbre-co1ig7",
    "linkLabel": "View on Devpost",
    "skills": ["React", "FastAPI", "SQLite", "SpeechBrain", "GPT-4o", "Stripe"],
    "image": timbre,
    "alt": "Timbre shopping assistant suggesting ingredients and a cart total",
    "video": "https://www.youtube.com/embed/GJmXV24xdeM?start=77"
  },
  {
    "title": "EasyCross",
    "role": "AI/ML Lead · January–May 2026",
    "paragraphs": [
      "Helping older adults navigate crosswalks with embedded AI. MAKE:ABLE 2026 finalist in two categories.",
      "For this project, we used an ESP32S3 along with a classification model to help ensure the elderly do not veer off the crosswalk. By using temporal smoothing to account for false positives, we were able to make a model that accurately predicts if a person is on the crosswalk or not."
    ],
    "url": "https://github.com/boomty/CameraDetectionforTraffic",
    "skills": [
      "C++",
      "Classification models"
    ],
    "image": cross,
    "alt": "EasyCross crosswalk detection",
    "video": null
  },
  {
    "title": "FBLA Nexus",
    "role": "iOS App Developer · January–February 2026",
    "paragraphs": [
      "An iOS app for chapter content and event sign-ups. California FBLA State Leadership Conference finalist in Mobile Application Development.",
      "Designed a relational SQLite schema to separate chapter-specific content. Built role-based tools for creating events, managing links, and promoting member roles."
    ],
    "skills": ["Swift", "SQLite", "iOS", "Role-based access"],
    "image": nexus,
    "alt": "FBLA Nexus chapter news and Instagram feed",
    "video": null
  },
  {
    "title": "HalloweenTracker",
    "role": "iOS App Developer · September–October 2025",
    "paragraphs": [
      "iPhone proximity monitoring powered by an ESP32 and iBeacon, with pairing and unpairing across devices.",
      "For this project, we created a CAD for the housing. Then, we used an ESP32 with iBeacon to connect with phones and GATT to advertise specific services the phone may need. Finally, I made a swift app to present information in a user friendly and human centric format."
    ],
    "url": "https://github.com/GSWForever8/HalloweenTracker",
    "skills": [
      "Swift",
      "Soldering",
      "C++"
    ],
    "image": edd,
    "alt": "HalloweenTracker hardware",
    "video": null
  },
  {
    "title": "DBHS FBLA Website 2.0",
    "role": "Project Lead · May–September 2025",
    "paragraphs": [
      "Led frontend and backend teams to build a member platform with personalized quizzes, community forums, and role-based access.",
      "For this website, we used a frontend with smooth transitions to enhance the user experience. We use the OpenAI GPT-5 API to create quiz questions, and we formatted the response to allow for the code to parse it and create questions. We also created a forum to allow for members to communicate, with votes, posts, and comments baked into its core functionality. I designed a SQLite database to support members and multiple role types."
    ],
    "url": "https://github.com/myName833/DBHS-FBLA-Website",
    "skills": [
      "OpenAI API",
      "Flask",
      "React"
    ],
    "image": dbfbla2,
    "alt": "DBHS FBLA Website 2.0",
    "video": "https://www.youtube.com/embed/STxqJcr_Juo"
  },
  {
    "title": "LockedIn",
    "paragraphs": [
      "AI Powered tool to empower students. This project combats inequality in our community by providing a personalized AI tutor for each and every student.",
      "For this project, we accomplished this through a 2 step solution: a grade analyzer and a chatbot. Both call an API to get a response, but the grade analyzer goes a step further by using Python's data analysis to create a personalized study plan per student."
    ],
    "url": "https://github.com/GSWForever8/congressapp24",
    "skills": [
      "Meta Llama API",
      "Flask",
      "Scikit-learn",
      "Matplotlib",
      "MERN Stack"
    ],
    "image": lockedin,
    "alt": "LockedIn tutoring interface",
    "video": "https://drive.google.com/file/d/1yYyR5ou4oNcvmcWmRlQCbWbpZg9yxROP/preview"
  },
  {
    "title": "DBHS FBLA Website",
    "paragraphs": [
      "The Official Website of DBHS FBLA. This website uses React.JS for its frontend. It also calls an API to Google Drive to retrieve resources."
    ],
    "url": "https://dbhsfbla.onrender.com",
    "skills": [
      "Google Oauth",
      "Google Drive API",
      "MERN Stack"
    ],
    "image": dbfbla,
    "alt": "DBHS FBLA website",
    "video": "https://www.youtube.com/embed/wXoCU0PCgy8"
  },
  {
    "title": "JS Flashcard Game",
    "paragraphs": [
      "Simple flashcard game, 6x3 and 6x6 options. This website uses JS to create the cards dynamically as well as to create the frontend."
    ],
    "url": "https://flashcardsahong.netlify.app",
    "skills": [
      "HTML",
      "JS",
      "CSS"
    ],
    "image": memory,
    "alt": "JavaScript flashcard game",
    "video": "https://www.youtube.com/embed/1FS4XOoQ338"
  },
  {
    "title": "CSVStudy",
    "paragraphs": [
      "Designed to help students study using CSV files. The program takes in a CSV file formatted a specific way and creates a quiz with terms and definitions."
    ],
    "url": "https://github.com/GSWForever8/CSVStudy",
    "skills": [
      "Python",
      "File handling",
      "Tkinter"
    ],
    "image": csvimage,
    "alt": "CSVStudy quiz interface",
    "video": "https://www.youtube.com/embed/q5vfzXKBdv4"
  },
  {
    "title": "Weather App",
    "paragraphs": [
      "Worked with an API and react to create basic and clean weather app. This website calls an API to get weather information for a specific city."
    ],
    "url": "https://ahongweather.netlify.app",
    "skills": [
      "React",
      "HTML",
      "CSS",
      "JS",
      "APIs"
    ],
    "image": weather,
    "alt": "Weather app",
    "video": "https://www.youtube.com/embed/GQpfp3g9piU"
  }
];

export default function Projects() {
    const projectsRef = useRef(null);

    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const stages = Array.from(projectsRef.current.querySelectorAll('.project-visual'));
        let frame = null;
        const update = () => {
            frame = null;
            stages.forEach(stage => {
                const bounds = stage.getBoundingClientRect();
                const progress = Math.max(-1, Math.min(1,
                    (window.innerHeight / 2 - bounds.top - bounds.height / 2) /
                    ((window.innerHeight + bounds.height) / 2)));
                const travel = window.innerWidth <= 768 ? 85 : 150;
                stage.style.setProperty('--parallax-offset', `${preference.matches ? 0 : progress * travel}px`);
            });
        };
        const schedule = () => {
            if (frame === null) frame = window.requestAnimationFrame(update);
        };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        preference.addEventListener('change', schedule);
        const observer = new ResizeObserver(schedule);
        stages.forEach(stage => observer.observe(stage));
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            preference.removeEventListener('change', schedule);
            observer.disconnect();
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="projects-page" ref={projectsRef}>
            <header className="projects-header">
                <p className="projects-eyebrow">IDEAS INTO IMPACT</p>
                <h1>Built with curiosity.</h1>
                <p>A collection of projects across software, AI, and hardware.</p>
                <a href="#project-collection" className="projects-browse">Explore projects <span aria-hidden="true">↓</span></a>
            </header>
            <div className="project-grid" id="project-collection">
                {projects.map((project, index) => (
                    <article className={`project-card project-tone-${index % 4}`} key={project.title} aria-labelledby={`project-${index}`}>
                        <div className="project-visual">
                            <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            {project.title === 'HalloweenTracker' ? (
                                <div className="project-top-half">
                                    <img src={project.image} alt={project.alt} />
                                </div>
                            ) : project.image ? (
                                <img src={project.image} alt={project.alt} loading={index > 1 ? 'lazy' : 'eager'} />
                            ) : (
                                <div className="project-wordmark"><span>FBLA</span><strong>Nexus.</strong><small>Chapter connection. In your pocket.</small></div>
                            )}
                        </div>
                        <div className="project-copy">
                            <p className="project-category">{['EasyCross', 'HalloweenTracker'].includes(project.title) ? 'HARDWARE & SOFTWARE' : 'SOFTWARE & EXPERIENCES'}</p>
                            <h2 id={`project-${index}`}>{project.title}</h2>
                            {project.role && <p className="project-role">{project.role}</p>}
                            <p className="project-summary">{project.paragraphs[0]}</p>
                            <ul className="project-skills" aria-label="Technologies used">
                                {project.skills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                            {project.url && <div className="project-actions">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {project.linkLabel || (project.url.includes('github.com') ? 'View source' : 'Visit website')} <span aria-hidden="true">↗</span>
                                </a>
                            </div>}
                            {(project.paragraphs.length > 1 || project.video) && (
                                <details className="project-details">
                                    <summary>More about this project</summary>
                                    {project.paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                                    {project.video && <div className="video"><iframe src={project.video} title={`${project.title} demo`} loading="lazy" allowFullScreen /></div>}
                                </details>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
