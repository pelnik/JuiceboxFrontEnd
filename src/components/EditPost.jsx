import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { patchPost } from '../api-adapter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function EditPost(props) {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;

  let { id } = useParams();
  id = Number(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const post = posts.find((singlePost, idx) => {
    singlePost.idx = idx;
    return singlePost.id === id;
  });

  const titleOnChange = (evt) => {
    setTitle(evt.target.value);
  };

  const contentOnChange = (evt) => {
    setContent(evt.target.value);
  };

  function onClickLogIn(evt) {
    navigate('/login');
  }

  function noPostComp() {
    return posts.length > 0 ? <div>Not a post</div> : <div>Loading</div>;
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const editedPost = await patchPost(token, id, title, content);
    console.log('edit post submit', editedPost);

    if (editedPost) {
      console.log('index', post.idx);
      const updatedPosts = [...posts];
      updatedPosts[post.idx] = editedPost;
      setPosts(updatedPosts);

      setTitle('');
      setContent('');

      navigate('/');
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [posts]);

  return (
    <div className="formContainer" id="post">
      {!post ? (
        noPostComp()
      ) : (
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
              placeholder="Type here"
              value={content}
              onChange={contentOnChange}
              multiline
              rows={4}
            />
          </label>
          {token ? (
            <Button variant="outlined" className="post-button" type="submit">
              Post
            </Button>
          ) : (
            <Button
              onClick={onClickLogIn}
              variant="outlined"
              className="post-button"
            >
              Please Log In
            </Button>
          )}
        </form>
      )}
    </div>
  );
}

export default EditPost;
