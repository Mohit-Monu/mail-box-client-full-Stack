import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function MainPageHeader() {
  return (
    <>
      <Navbar key="false" expand="true" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <NavLink to="/compose">
            <Button variant="outline-info">Compose New Mail</Button>
          </NavLink>
          <Navbar.Brand>Mail Box </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Mail Box
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <NavLink to="/inbox">
                  <div
                    className="container-fluid d-flex align-items-center justify-content-between --bs-primary-bg-subtle"
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      height: "40px",
                      color: "black",
                      backgroundColor: "#a2d2ff",
                      borderRadius: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    <h5>Inbox</h5>
                    <h5>999+</h5>
                  </div>
                </NavLink>
                <NavLink to="/unread">
                  <div
                    className="container-fluid d-flex align-items-center justify-content-between --bs-primary-bg-subtle"
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      height: "35px",
                      color: "black",
                      borderRadius: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    <h5>Unread</h5>
                    <h5>999+</h5>
                  </div>
                </NavLink>
                <NavLink to="/sent">
                  <div
                    className="container-fluid d-flex align-items-center justify-content-between --bs-primary-bg-subtle"
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      height: "35px",
                      color: "black",
                      borderRadius: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    <h5>Sent</h5>
                    <h5>999+</h5>
                  </div>
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainPageHeader;
