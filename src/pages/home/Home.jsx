import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./home.css";

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
