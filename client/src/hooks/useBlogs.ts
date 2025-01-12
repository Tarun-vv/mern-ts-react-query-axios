import { useEffect, useState } from "react";
import { Blog } from "../types/blog";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000";

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(function () {
    async function fetchBlogs() {
      try {
        const blogs = await axios.get(`${BASE_URL}/api/v1/blogs`);
        setBlogs(blogs.data.data.blogs);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchBlogs();
  }, []);

  return { blogs };
}
