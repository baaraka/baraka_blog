import React from "react";
import Post from "../post/Post";
import "./posts.css";
import UseFetch from "../../hooks/UseFetch";
import SinglePost from "../singlePost/SinglePost";

export default function Posts() {
  const { data, loading, error } = UseFetch("http://localhost:8000/api/posts");

  return (
    <div className="posts">
      {loading ? (
        "loading please wait..."
      ) : error ? (
        "Error in fetching data.."
      ) : (
        <>
          {data.map((item) => (
            <Post item={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  );
}
