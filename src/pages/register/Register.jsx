import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="registerLabel">Username..</label>
        <input type="text" placeholder="Enter Your Username.." />
        <label className="registerLabel">E-mail</label>
        <input type="email" placeholder="Enter Your Email.." />
        <label className="registerLabel">Password</label>
        <input type="password" placeholder="Enter Your Password.." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
