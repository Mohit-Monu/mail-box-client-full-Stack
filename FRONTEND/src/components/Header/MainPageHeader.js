import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Arrow from "./arrow.json";
import Menu from "./menu.json";
import Logout from "./logout.json";
import Lottie from "lottie-react";
import "./HeaderMain.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { useState } from "react";
function MainPageHeader() {
  const navigate = useNavigate();
  const sentno = useSelector((state) => state.mailsno.sent);
  const inboxno = useSelector((state) => state.mailsno.inbox);
  const unreadno = useSelector((state) => state.mailsno.unread);
  const [composemailhover, setcomposemailhover] = useState(false);
  const [menuhover, setmenuhover] = useState(false);
  const [logouthover, setlogouthover] = useState(false);

  const dispatch = useDispatch();

  function LogoutHandler() {
    localStorage.removeItem("token");
    dispatch(authActions.logout());
    navigate("/");
  }

  return (
    <>
      <Navbar key="false" expand="true" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`}>
            <div
              style={{ width: "40px", float: "left" }}
              onMouseEnter={() => {
                setmenuhover(true);
              }}
              onMouseLeave={() => {
                setmenuhover(false);
              }}
            >
              <Lottie loop={menuhover} animationData={Menu}></Lottie>
            </div>
          </Navbar.Toggle>
          <Navbar.Brand>
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Mail Box
            </h3>
          </Navbar.Brand>
          <NavLink to="/compose">
            <Button
              variant="outline-info"
              className="d-flex align-items-center justify-content-between"
              onMouseEnter={() => {
                setcomposemailhover(true);
              }}
              onMouseLeave={() => {
                setcomposemailhover(false);
              }}
            >
              <div
                style={{ width: "50px", float: "left", marginRight: "10px" }}
              >
                <Lottie loop={composemailhover} animationData={Arrow}></Lottie>
              </div>
              Compose New Mail
            </Button>
          </NavLink>
          <div>
            <NavLink to="/">
              <Button
                onClick={LogoutHandler}
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
                Logout
              </Button>
            </NavLink>
          </div>
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
              <div className="divv">
                <Nav>
                  <NavLink to="/loggedin">
                    <div
                      className="container-fluid d-flex align-items-center justify-content-between --bs-primary-bg-subtle"
                      style={{
                        border: "1px solid black",
                        width: "100%",
                        height: "40px",
                        color: "black",
                        borderRadius: "20px",
                      }}
                    >
                      <h5>Inbox</h5>
                      <h5>{inboxno}</h5>
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
                      }}
                    >
                      <h5>Unread</h5>
                      <h5>{unreadno}</h5>
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
                      }}
                    >
                      <h5>Sent</h5>
                      <h5>{sentno}</h5>
                    </div>
                  </NavLink>
                  <NavLink to="/compose" style={{ marginTop: "20px" }}>
                    <Button
                      variant="outline-info"
                      className="d-flex align-items-center justify-content-between"
                      onMouseEnter={() => {
                        setcomposemailhover(true);
                      }}
                      onMouseLeave={() => {
                        setcomposemailhover(false);
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          float: "left",
                          marginRight: "10px",
                        }}
                      >
                        <Lottie
                          loop={composemailhover}
                          animationData={Arrow}
                        ></Lottie>
                      </div>
                      Compose New Mail
                    </Button>
                  </NavLink>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainPageHeader;
