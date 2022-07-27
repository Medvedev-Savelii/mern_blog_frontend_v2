import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useLocation } from "react-router";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const server = "http://localhost:5000/api/";
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(server + "posts/" + search);
      setPosts(res.data);
    };
    fetchPosts();
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
