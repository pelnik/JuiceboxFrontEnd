import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

function PostForm() {
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
    const newToken = await login(username, password);
    console.log("login submit token", newToken);

    setUsername("");
    setPassword("");

    if (newToken !== null) {
      setToken(newToken);
    }
  };

  return (
    <div className="formContainer" id="post">
      <form className="form">
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
