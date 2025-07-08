export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid" />
      <p className="mt-4 text-gray-600">Loading post...</p>
    </div>
  );
}
