import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Setting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState(false);

  const pf = "http://localhost:8000/images/";

  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePublish = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("http://localhost:8000/api/upload", data);
      } catch (error) {}
    }

    try {
      const res = await axios.put(
        `http://localhost:8000/api/users/${user._id}`,
        updatedUser
      );
      setMessage(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE", payload: error.message });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${user._id}`, {
        data: { userId: user._id },
      });
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settingForm" onSubmit={handlePublish}>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src={file ? URL.createObjectURL(file) : pf + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingSubmit" type="submit">
            Update
          </button>
          {message && <span>Your profile has updated</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
