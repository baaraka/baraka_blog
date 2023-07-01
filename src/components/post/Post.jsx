import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ item }) {
  const pf = "http://localhost:8000/images/";
  return (
    <div className="post">
      {item.photo && <img src={pf + item.photo} alt="" className="postImg" />}
      <div className="postInfo">
        <div className="postCats">
          {item.categories.map((category) => (
            <span className="postCat" key={category}>
              {category}
            </span>
          ))}
        </div>
        <span className="postTitle">{item.title}</span>
        <hr />
        <span className="postDate">
          <span className="postDate">
            {new Date(item.createdAt).toDateString()}
          </span>
        </span>
      </div>
      <Link
        to={`/posts/${item._id}`}
        key={item._id}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <p className="postDescription">{item.desc}</p>
      </Link>
    </div>
  );
}
