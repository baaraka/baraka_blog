import Sidebar from "../../sidebar/Sidebar";
import "./setting.css";

export default function Setting() {
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
          <input type="text" placeholder="Barack" />
          <label>E-mail</label>
          <input type="email" placeholder="barakaganai01@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
