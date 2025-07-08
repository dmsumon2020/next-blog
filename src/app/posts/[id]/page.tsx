import { Post } from "@/types/post";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist.",
    };
  }

  const post: Post = await response.json();

  return {
    title: `${post.title}`,
    description: post.body.slice(0, 100),
  };
};

export default async function SinglePost({ params }: Props) {
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
