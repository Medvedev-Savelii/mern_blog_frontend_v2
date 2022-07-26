import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
      <Post img={"https://pirozhki.spb.ru/photo/Iceland/_MG_0631-PSD-10.jpg"} />
    </div>
  );
}
