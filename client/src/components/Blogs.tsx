import { useAllBlogs } from "../hooks/useAllBlogs";
import { Blog } from "../types/blog";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const { data, isLoading } = useAllBlogs();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">All Blogs</h1>
      <ul>{data?.map((blog: Blog) => <BlogCard blog={blog} />)}</ul>
    </div>
  );
}
