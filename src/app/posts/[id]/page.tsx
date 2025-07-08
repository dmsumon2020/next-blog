import { Post } from "@/types/post";
import { notFound } from "next/navigation";

export default async function SinglePost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  /* await new Promise((resolve) =>
    setTimeout(() => {
      resolve("It is okay");
    }, 2000)
  );*/

  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    notFound();
  }
  const post: Post = await response.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
