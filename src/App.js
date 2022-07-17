import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar expand="lg" id="navbar">
          <Container>
              <Navbar.Brand href="#home" id="navHeader">Angelina White</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                  <Nav id="nav">
                      <Nav.Link href="#link" id="projectNav">Projects</Nav.Link>
                      <Nav.Link href="#link" id="navLinks">About Me</Nav.Link>
                      <Nav.Link href="#link" id="navLinks">Contact</Nav.Link>
                      <Nav.Link href="https://www.linkedin.com/in/angelinawhite/" id="linkedIcon"><FaLinkedin /></Nav.Link>
                      <Nav.Link href="https://github.com/angelina-white" id="gitIcon"><AiFillGithub /></Nav.Link>
                      <Nav.Link href="https://dev.to/angelinawhite" id="devIcon"><FaDev /></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
