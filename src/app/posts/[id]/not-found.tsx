// app/posts/[id]/not-found.tsx

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-red-600">Post Not Found</h1>
      <p className="mt-4 text-gray-500">
        We couldn&#39;t find the post you&#39;re looking for.
      </p>
    </div>
  );
}
