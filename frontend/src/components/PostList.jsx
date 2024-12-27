import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Post from "./post";
import PostModule from "./PostList.module.css";

const PostList = () => {
  const posts = useLoaderData();

  function addPostHandler(postDate) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postDate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setPosts((existingPost) => [postDate, ...existingPost]);
  }

  return (
    <>
      {posts?.length > 0 && (
        <ul className={PostModule.posts1}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts?.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p> Start adding some!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
