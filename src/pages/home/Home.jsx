import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const { search } = useLocation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/posts" + search);
      setPosts(res.data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />

        <Sidebar />
      </div>
    </>
  );
}
