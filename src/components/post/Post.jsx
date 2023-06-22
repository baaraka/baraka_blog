import UseFetch from "../../hooks/UseFetch";
import "./post.css";
import { formatDistanceToNow } from "date-fns";

export default function Post() {
  const { data, loading, error } = UseFetch("http://localhost:8000/api/posts");

  return (
    <>
      {loading ? (
        "please wait..."
      ) : (
        <>
          {data.map((item) => (
            <>
              <div className="post">
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
            </>
          ))}
        </>
      )}
    </>
  );
}
