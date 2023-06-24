import { useLocation } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import "./singlepost.css";
import { formatDistanceToNow } from "date-fns";

export default function SinglePost() {
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  const { data, loading, error } = UseFetch(
    `http://localhost:8000/api/users/${id}`
  );

  return (
    <div className="singlePost">
      {loading ? (
        "loading please wait"
      ) : error ? (
        "error in fetching data"
      ) : (
        <div className="singlePostWrapper">
          <img src={data.photo} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            {data.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon editIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon deleteIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Barack</b>
            </span>
            <span className="singlePostDate">{data.createdAt}</span>
          </div>
          <p className="singlePostDesc">{data.desc}</p>
        </div>
      )}
    </div>
  );
}
