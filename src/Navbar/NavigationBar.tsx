import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to={"basic-details"} className="text-white">
          <b>5E Online Character Sheet</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <b>
              <Nav.Link as={Link} to={"basic-details"} className="text-white">
              Basic Details <i className="bi bi-person-fill"/>
              </Nav.Link>
            </b>
            <b>
              <Nav.Link as={Link} to={"feats-traits"} className="text-white">
                Feats and Traits <i className="bi bi-info-circle-fill"/>
              </Nav.Link>
            </b>
            <b>
              <Nav.Link as={Link} to={"spells"} className="text-white">
                Spells <i className="bi bi-fire"/>
              </Nav.Link>
            </b>
            <b>
              <Nav.Link as={Link} to={"config"} className="text-white">
                Config <i className="bi bi-gear-fill"/>
              </Nav.Link>
            </b>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
