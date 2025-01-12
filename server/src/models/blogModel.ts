import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "A blog must have a name"],
  },
  subheading: {
    type: String,
    required: [true, "A blog must have a sub heading"],
  },
  description: {
    type: String,
    required: [true, "A blog must have a description"],
  },
  authorName: {
    type: String,
    required: [true, "A blog must have an author"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
