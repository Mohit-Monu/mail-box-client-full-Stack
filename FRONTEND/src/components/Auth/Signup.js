import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import axios from "axios"
function SignUp(props) {
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ConfirmPasswordRef = useRef();

  async function SignUpHandler(e){
    e.preventDefault()
    if(PasswordRef.current.value !== ConfirmPasswordRef.current.value){
      props.error("Password Does Not Match","The Password Which You Have Entered Is Missed Match PLease Re-enter")
    }else{
      try{
        const config={
          method:"POST",
          url:`http://localhost:3001/user/signup`,
          data:{
            email: EmailRef.current.value,
            password: PasswordRef.current.value,
          }
        }
        const res=await axios(config)
        props.error("User has successfully signed up",`your email id is ${res.data.message} thank you for registring`)
      }catch(err){
        props.error("Opps Something Went Wrong",err.response.data.message)
      }
    }
      
    }
  return (
    <Container
      className="mt-5 pb-4 pt-4 text-center border border-warning "
      style={{ width: "500px" }}
    >
      <h1 className="mb-4" style={{ fontSize: "30px", color: "red" }}>
        Sign-Up
      </h1>
      <hr />
      <form onSubmit={SignUpHandler}>
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
        <Form.Floating className="mb-3">
          <Form.Control
            ref={ConfirmPasswordRef}
            id="floatingPasswordConfCustom"
            type="password"
            required
            placeholder="Confirm Password"
          />
          <label htmlFor="floatingPasswordConfCustom">Confirm Password</label>
        </Form.Floating>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark mb-3">
            Sign-Up
          </button>
        </div>
        <NavLink to="/login" style={{color:"black"}}> Have an account? Login</NavLink>
      </form>
    </Container>
  );
}
export default SignUp;
