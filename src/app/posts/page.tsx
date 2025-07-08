import { Post } from "@/types/post";
import React from "react";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }, // ISR
  });
  const posts: Post[] = await response.json();
  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
