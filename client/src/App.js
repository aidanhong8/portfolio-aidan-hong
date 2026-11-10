import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './pages/logo.png';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './App.css';

function App() {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="portfolio-nav">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Aidan Hong home" className="App-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav>
              <Nav.Link as={NavLink} to="/about">About Me</Nav.Link>
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <NavDropdown title="Quick Links" id="navbarDropdown">
                <NavDropdown.Item href="https://linkedin.com/in/aidanhong8">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://fencingtracker.com/p/100326448/Aidan-Hong">FencingTracker</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/aidanhong8">GitHub</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <main className="container">
        <div className="contentwrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <p>Aidan Hong © 2026</p>
      </footer>
    </>
  );
}

export default App;
