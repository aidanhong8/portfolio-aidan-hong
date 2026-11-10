import abouthead from "./about-portrait.jpeg";

const skills = {
    'Languages & frameworks': ['Python', 'C++', 'React', 'Flask', 'Swift', 'SQL'],
    'Databases & tools': ['SQLite', 'SQLAlchemy', 'Git', 'Xcode', 'VS Code', 'iBeacon', 'ArcGIS', 'ArcPy'],
    'AI & machine learning': ['OpenCV', 'YOLO', 'Scikit-learn', 'OpenAI API', 'Classification models', 'Matplotlib'],
};

export default function About() {
    return (
        <div className="content about-page">
            <header className="page-header">
                <p className="projects-eyebrow">A LITTLE ABOUT ME</p>
                <h1>About Me</h1>
                <p>Building at the intersection of intelligent software and real-world systems.</p>
            </header>
            <section className="side surface-card about-profile">
                <div>
                    <h2>Aidan Hong</h2>
                    <p>B.S. in Computer Science at Georgia Institute of Technology · Expected May 2029</p>
                    <p>Threads: Systems Architecture and Artificial Intelligence</p>
                    <p>Coursework: Object-Oriented Programming, Discrete Math, and Linear Algebra.</p>
                    <p>Based in Atlanta, Georgia.</p>
                </div>
                <img className="image" src={abouthead} alt="Aidan Hong" />
            </section>
            <section className="surface-card experience-card">
                <p className="projects-eyebrow">EXPERIENCE</p>
                <h2>IT Intern · Access Services</h2>
                <p className="resume-meta">June–August 2026 · El Monte, California</p>
                <ul>
                    <li>Developed ArcGIS base layers focused on service-area demographics to support long-term planning.</li>
                    <li>Automated transit-provider data cleaning and ingestion with a reusable ArcPy workflow.</li>
                    <li>Analyzed transit data to streamline operations and wrote software guides and code documentation.</li>
                </ul>
            </section>
            <div className="about-grid">
                <section className="surface-card">
                    <h2>Leadership</h2>
                    <h3 className="resume-subheading">DBHS Future Business Leaders of America</h3>
                    <p className="resume-meta">VP of Competitive Events · 2024–2026<br />Competitive Events Officer · 2023</p>
                    <p>Trained over 100 members for regional, state, and national events. Developed training pathways that doubled state qualifiers and tripled national qualifiers over two years.</p>
                    <h3 className="resume-subheading">Diamond Bar Hackathon Club</h3>
                    <p className="resume-meta">President & Founder · 2024–2026</p>
                    <p>Hosted hackathons for different skill levels, secured affiliation with the school’s technology pathway, and taught data structures and algorithms biweekly.</p>
                </section>
                <section className="surface-card">
                    <h2>Technical Skills</h2>
                    {Object.entries(skills).map(([category, items]) => (
                        <div className="skill-group" key={category}>
                            <h3 className="resume-subheading">{category}</h3>
                            <ul className="project-skills">{items.map(skill => <li key={skill}>{skill}</li>)}</ul>
                        </div>
                    ))}
                    <p className="resume-meta certification">GIAC Foundational Cybersecurity Technologies (GFACT)</p>
                </section>
                <section className="surface-card">
                    <h2>Honors & Awards</h2>
                    <ul>
                        <li>High School Valedictorian</li>
                        <li>National Cyber Scholar</li>
                        <li>USACO Silver</li>
                        <li>NCL Top 20% · Fall 2024</li>
                        <li>FBLA National Leadership Conference · 5th Place, Database Design and Applications</li>
                        <li>MAKE:ABLE 2026 finalist · Best Showcase of Autodesk Software and Best Showcase of Iterative Design</li>
                        <li>California FBLA State Leadership Conference finalist · Mobile Application Development</li>
                    </ul>
                </section>
                <section className="surface-card">
                    <h2>Beyond the Code</h2>
                    <p>Fencing, snowboarding, traveling, and strength training.</p>
                    <p>D26 Saber Fencer & L1 Saber Referee.</p>
                    <h3 className="resume-subheading">Languages</h3>
                    <ul className="project-skills"><li>English</li><li>Mandarin Chinese</li><li>Cantonese</li></ul>
                </section>
            </div>
        </div>
    );
}
