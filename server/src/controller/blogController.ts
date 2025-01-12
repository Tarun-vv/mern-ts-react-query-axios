import { Request, Response } from "express";
import Blog from "../models/blogModel";

export const getAllBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find();

  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = await Blog.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newBlog,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        updatedBlog,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Successfully deleted",
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
