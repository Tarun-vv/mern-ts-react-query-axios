import { useState } from "react";

export default function AddBlog() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");
  const [description, setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold">Create a new blog</h1>

      <form>
        <div>
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            placeholder="Heading"
            id="heading"
            className="p-2 border-2 border-gray-100"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subheading">Sub heading</label>
          <input
            type="text"
            placeholder="Sub heading"
            id="subheading"
            className="p-2 border-2 border-gray-100"
            value={subheading}
            onChange={(e) => setSubHeading(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description"
            id="description"
            className="p-2 border-2 border-gray-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="authorName">Author name</label>
          <input
            type="text"
            placeholder="Author name"
            id="authorName"
            className="p-2 border-2 border-gray-100"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <button className="p-2 bg-blue-300 rounded-lg">Add Blog</button>
      </form>
    </div>
  );
}
