import { Link } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import "./post.css";
import { formatDistanceToNow } from "date-fns";
import SinglePost from "../singlePost/SinglePost";

export default function Post() {
  const { data, loading, error } = UseFetch("http://localhost:8000/api/posts");

  return (
    <>
      {loading ? (
        "please wait..."
      ) : error ? (
        "error in fetching data"
      ) : (
        <>
          {data.map((item) => (
            <>
              <Link
                to={`/posts/${item._id}`}
                key={item._id}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="post" key={item._id}>
                  <img src={item.photo} alt="" className="postImg" />
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
                        {formatDistanceToNow(new Date(item.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </span>
                  </div>
                  <p className="postDescription">{item.desc}</p>
                </div>
              </Link>
            </>
          ))}
        </>
      )}
    </>
  );
}
