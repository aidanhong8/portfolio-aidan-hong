import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pages/logo.png';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="d-inline-block align-text-top App-logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link bar" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bar" to="/projects">Projects</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle bar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quick Links
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item bar" href="https://linkedin.com/in/aidanhong8">LinkedIn</a></li>
                  <li><a className="dropdown-item bar" href="https://fencingtracker.com/p/100326448/Aidan-Hong">FencingTracker</a></li>
                  <li><a className="dropdown-item bar" href="https://github.com/aidanhong8">GitHub</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link bar" to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="contentwrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <footer className="footer">
        <p>Aidan Hong © 2026</p>
      </footer>
    </>
  );
}

export default App;
