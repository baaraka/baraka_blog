import { Link, useLocation, useNavigate } from "react-router-dom";
import "./singlepost.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function SinglePost() {
  const pf = "http://localhost:8000/images/";

  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const { user } = useContext(AuthContext);

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
      setData(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      {data && (
        <div className="singlePostWrapper">
          {data.photo && (
            <img src={pf + data.photo} alt="" className="singlePostImg" />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              className="singlePostTitleInput"
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {data.username === user?.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon editIcon fa-solid fa-pen-to-square"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon deleteIcon fa-solid fa-trash-can"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          )}
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              <Link
                to={`/?user=${data.username}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Author: <b>{data.username}</b>
              </Link>
            </span>
            <span className="singlePostDate">
              {new Date(data.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="singlePostDescInput"
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostBtn" onClick={handleUpdate}>
              Update Post
            </button>
          )}
        </div>
      )}
    </div>
  );
}
