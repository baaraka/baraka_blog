import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.message });
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="registerLabel">Username..</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Your Username.."
          onChange={handleChange}
        />
        <label className="registerLabel">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email.."
          onChange={handleChange}
        />
        <label className="registerLabel">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password.."
          onChange={handleChange}
        />
        <button
          disabled={loading}
          onClick={handleRegister}
          className="registerButton"
        >
          Register
        </button>
        {error && <span>{error.message}</span>}
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
