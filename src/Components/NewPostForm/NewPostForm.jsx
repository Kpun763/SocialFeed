import React, { useState } from "react";
import "./NewPostForm.css";

const NewPostForm = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({ name: "", body: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(newPost);
    setNewPost({ name: "", body: "" });
  };

  return (
    <div className="text-field">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={newPost.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Post:
          <textarea name="body" value={newPost.body} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewPostForm;
