import { useDeleteBlog } from "../hooks/useDeleteBlog";
import { Blog } from "../types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  const { deleteBlog, isDeleting } = useDeleteBlog();

  if (isDeleting) return <p>Loading...</p>;

  return (
    <div>
      <li key={blog._id}>
        <button
          className="p-1 bg-gray-300 rounded-lg cursor-pointer"
          onClick={() => deleteBlog(blog._id)}
        >
          Delete this blog
        </button>
        <h1 className="text-2xl font-bold">{blog.heading}</h1>
        <p>{blog.subheading}</p>
        <p>
          <em>
            This blog was written by {blog.authorName} on
            {new Date(blog.date).toDateString()}
          </em>
        </p>
        <p>{blog.description}</p>
      </li>
    </div>
  );
}
