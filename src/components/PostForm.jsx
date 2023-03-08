import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

import { newPost } from '../api-adapter';

function PostForm(props) {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleOnChange = (evt) => {
    setTitle(evt.target.value);
  };

  const contentOnChange = (evt) => {
    setContent(evt.target.value);
  };

  function onClickLogIn(evt) {
    navigate('/login');
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const createdPost = await newPost(token, title, content);
    console.log("newPost submit", createdPost);

    if ('id' in createdPost) {
      const updatedPosts = [...posts];
      updatedPosts.push(createdPost);
      setPosts(updatedPosts);

      navigate('/');

      setTitle("");
      setContent("");
    }

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
        {token
          ? <Button variant="outlined" className="post-button" type="submit">
            Post
          </Button>
          : <Button onClick={onClickLogIn} variant="outlined" className="post-button">
            Please Log In
          </Button>
        }
      </form>
    </div>
  );
}

export default PostForm;
