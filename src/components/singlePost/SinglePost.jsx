import { Link, useLocation } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import "./singlepost.css";

export default function SinglePost() {
  const pf = "http://localhost:8000/images/";

  const location = useLocation();

  const id = location.pathname.split("/")[2];
  const { data, loading, error } = UseFetch(
    `http://localhost:8000/api/posts/${id}`
  );

  return (
    <div className="singlePost">
      {loading ? (
        "loading please wait"
      ) : error ? (
        "error in fetching data"
      ) : (
        <>
          {data && (
            <div className="singlePostWrapper">
              {data.photo && (
                <img src={pf + data.photo} alt="" className="singlePostImg" />
              )}
              <h1 className="singlePostTitle">
                {data.title}
                <div className="singlePostEdit">
                  <i className="singlePostIcon editIcon fa-solid fa-pen-to-square"></i>
                  <i className="singlePostIcon deleteIcon fa-solid fa-trash-can"></i>
                </div>
              </h1>
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
              <p className="singlePostDesc">{data.desc}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
