import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import "./singlepost.css";
import { formatDistanceToNow } from "date-fns";

export default function SinglePost({ item }) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={item?.photo} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {item?.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon editIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon deleteIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Barack</b>
          </span>
          <span className="singlePostDate">{item?.createdAt}</span>
        </div>
        <p className="singlePostDesc">{item?.desc}</p>
      </div>
    </div>
  );
}
