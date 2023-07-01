import { Link } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import "./sidebar.css";

export default function Sidebar() {
  const { data, loading, error } = UseFetch(
    "http://localhost:8000/api/categories"
  );
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <span className="sidebarNkt">.</span>
        <img
          src="https://img.freepik.com/premium-photo/male-internet-hacker-hood-sitting-screens-back-view-illegal-web-programmer-workplace-criminal-occupation-data-hacking-cyber-security_266732-18744.jpg"
          alt=""
          className="sidebarImg"
        />
        <p className="sidebarPara">
          I am a full-stack web developer with strong knowledge of MongoDB,
          node.js, Javascript{" "}
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <span className="sidebarNkt">.</span>
        <ul className="sidebarList">
          {loading ? (
            "loading please wait.."
          ) : error ? (
            "Error in fetching data"
          ) : (
            <>
              {data.map((item) => (
                <Link
                  to={`/?cat=${item.name}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <li className="sidebarListItem" key={item._id}>
                    {item.name}
                  </li>
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <span className="sidebarNkt">.</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
