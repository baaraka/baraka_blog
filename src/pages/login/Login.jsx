import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className="loginLabel">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Your Username.."
          onChange={handleChange}
        />
        <label className="loginLabel">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password.."
          onChange={handleChange}
        />
        <button
          disabled={loading}
          onClick={handleLogin}
          className="loginButton"
        >
          Login
        </button>
        {error && <span>{error}</span>}
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
