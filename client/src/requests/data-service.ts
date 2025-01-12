import axios from "axios";
import { Blog } from "../types/blog";

const BASE_URL = "http://127.0.0.1:3000";

export async function fetchAllBlogs() {
  try {
    const blogs = await axios.get(`${BASE_URL}/api/v1/blogs`);

    console.log(blogs);
    return blogs.data.data.blogs;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error fetching blogs");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

export async function deleteBlog(id: string) {
  try {
    await axios.delete(`${BASE_URL}/api/v1/blogs/${id}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error fetching blogs");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

export async function updateBlog(updatedBlog: Blog) {
  try {
    await axios.patch(`${BASE_URL}/api/v1/blogs`, updatedBlog);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error fetching blogs");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
