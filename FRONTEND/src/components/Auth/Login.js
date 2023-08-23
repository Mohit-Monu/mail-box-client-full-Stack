import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
function LogIn(props) {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const EmailRef = useRef();
  const PasswordRef = useRef();
  async function LoginHandler(e) {
    e.preventDefault();

    try {
      const config = {
        method: "POST",
        url: `http://localhost:3001/user/login`,
        data: {
          email: EmailRef.current.value,
          password: PasswordRef.current.value,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(config);
      localStorage.setItem("token", res.data.token);
      dispatch(authActions.login())
      navigate("/loggedin");
    } catch (err) {
      props.error("Opps Something Went Wrong",err.response.data.message );
    }
  }
  return (
    <Container
      className="mt-5 pb-4 pt-4 text-center border border-warning "
      style={{ width: "500px" }}
    >
      <h1 className="mb-4" style={{ fontSize: "30px", color: "red" }}>
        Log-In
      </h1>
      <hr />
      <form onSubmit={LoginHandler}>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={EmailRef}
            id="floatingInputCustom"
            type="email"
            required
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={PasswordRef}
            id="floatingPasswordCustom"
            type="password"
            required
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark mb-3">
            Log-In
          </button>
        </div>
        <NavLink to="/signup" style={{ color: "black" }}>
          Don't have an account? Sign up
        </NavLink>
        <br />
        <NavLink to="/forgetpass" style={{ color: "red" }}>
          forget password?
        </NavLink>
      </form>
    </Container>
  );
}
export default LogIn;
