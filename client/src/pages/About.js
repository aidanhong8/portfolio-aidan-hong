import medal from "./medal.jpeg";
export default function About(){
    return (
        <div class="content">
            <div class="side">
                <div>
                <h1>About Me</h1>
                <p>Name: Aidan Hong</p>
                <p>Age: 17</p>
                <p>School: Diamond Bar High School C/O 2026</p>
                <p>Interests: Programming, engineering, fencing</p>
            </div>
            <div>
                <img class="image"src={medal}></img>
            </div>
        </div>
            <h1>Activities</h1>
            <ul>
                <li>Fencing</li>
                <li>USACO Silver</li>
                <li>ACSL</li>
                <li>Cyberpatriot</li>
                <li>FBLA</li>
                <li>Math Madness</li>
                <li>Math Kangaroo</li>
                <li>PicoCTF</li>
                <li>National Cyber League</li>
            </ul>
                <h1>Awards</h1>
            <ul>
                <li>ACSL Senior Division 1st Place</li>
                <li>FBLA NLC National Winner 5th Place Database Design and Applications 2024</li>
                <li>USA Fencing All-Academic First Team 2023-24</li>
                <li>CA FBLA SLC 4th Database Design and Applications 2024</li>
                <li>USA Fencing National Championships Division III Men's Saber</li>
                <li>CA FBLA ISLC 1st Computer Problem Solving 2024</li>
                <li>CA FBLA ISLC 2nd Database Design and Applications 2024</li>
                <li>2024 USA Fencing Junior Olympics Qualification Cadet+Junior Men's Sabre</li>
                <li>USA Fencing All-Academic First Team</li>
                <li>CA FBLA SLC 4th Computer Applications 2023</li>
                <li>CA FBLA SLC 4th Database Design and Applications 2023</li>
                <li>Qualified for 2023 NLC for Computer Applications + Database Design and Applications</li>
                <li>CA FBLA ISLC 3rd Computer Applications 2023</li>
                <li>CA FBLA ISLC 2nd Database Design and Applications 2023</li>
                <li>ACSL 2024 Finalist</li>
                <li>ACSL 2023 Finalist</li>
                <li>ACSL 2022 Finalist</li>
            </ul>
            <h1>Certifications</h1>
            <ul>
                <li>GFACT Certification from SANS</li>
                <li>D26 Sabre Rating</li>
                <li>L1 Rated Sabre Referee</li>
                <li>P Rated Epee Referee</li>
                <li>P Rated Foil Referee</li>
            </ul>
            <h1>Current Positions</h1>
            <ul>
                <li>DBHS FBLA VP of Competitive Events</li>
                <li>DB Hackathon Club Co-President</li>
                <li>Vex Cyberbots Robotics Captain</li>
            </ul>
            <h1>Prior Positions</h1>
            <ul>
                <li>STEM Intern at Access Services</li>
            </ul>
        </div>
    );
}
