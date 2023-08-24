import Button from "react-bootstrap/Button";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Lottie from "lottie-react";
import Logout from "./logout.json"
import { useState } from "react";
function Header() {
  const [logouthover, setlogouthover] = useState(false);

  return (
    <div>
      <Navbar expand="lg" className={`bg-${"light"}`} variant={"light"}>
        <Container fluid>
          <Navbar.Brand href="/">Mail Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About us</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div>
              
            <NavLink to="/signup">
              <Button
                variant="outline-info"
                className="d-flex align-items-center justify-content-between"
                onMouseEnter={() => {
                  setlogouthover(true);
                }}
                onMouseLeave={() => {
                  setlogouthover(false);
                }}
              >
                <div
                  style={{ height: "30px", float: "left", marginRight: "10px" }}
                >
                  <Lottie
                    style={{ height: "25px" }}
                    loop={logouthover}
                    animationData={Logout}
                  ></Lottie>
                </div>
                Log-In / Sign Up
              </Button>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
