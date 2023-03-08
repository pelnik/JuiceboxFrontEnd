import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

import { newPost } from '../api-adapter';

function PostForm(props) {
  const token = props.token;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleOnChange = (evt) => {
    setTitle(evt.target.value);
  };

  const contentOnChange = (evt) => {
    setContent(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const createdPost = await newPost(token, title, content);
    console.log("newPost submit", createdPost);

    setTitle("");
    setContent("");
  };

  return (
    <div className="formContainer" id="post">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            value={title}
            name="title"
            onChange={titleOnChange}
            variant="outlined"
            label="Title"
          />
        </label>
        <label>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            placeholder='Type here'
            value={content}
            onChange={contentOnChange}
            multiline
            rows={4}
            // defaultValue="Default Value"
          />
        </label>
        <Button variant="outlined" className="post-button" type="submit">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
