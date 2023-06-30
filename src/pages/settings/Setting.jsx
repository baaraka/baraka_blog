import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import { AuthContext } from "../../context/AuthContext";

export default function Setting() {
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {};

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://img.freepik.com/premium-photo/male-internet-hacker-hood-sitting-screens-back-view-illegal-web-programmer-workplace-criminal-occupation-data-hacking-cyber-security_266732-18744.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Barack"
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="barakaganai01@gmail.com"
            onChange={handleChange}
          />
          <label>Password</label>
          <input type="password" id="password" onChange={handleChange} />
          <button disabled={loading} className="settingSubmit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
