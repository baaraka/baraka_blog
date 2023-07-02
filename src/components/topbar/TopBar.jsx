import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function TopBar() {
  const pf = "http://localhost:8000/images/";

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {user && <span onClick={handleLogout}>LOGOUT</span>}
          </li>
        </ul>
      </div>
      <div className="topRight">
        <span style={{ marginRight: "10px" }}>{user && user.username}</span>
        {user ? (
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img className="topImg" src={pf + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
