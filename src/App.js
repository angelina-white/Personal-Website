import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar expand="lg" id="navbar">
          <Container>
              <Navbar.Brand href="#home" id="navHeader">Angelina White</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                  <Nav>
                      <Nav.Link href="#link" id="navLinks">Projects</Nav.Link>
                      <Nav.Link href="#link" id="navLinks">About Me</Nav.Link>
                      <Nav.Link href="#link" id="navLinks">Contact</Nav.Link>
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
