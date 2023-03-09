import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';

import { deletePost } from '../api-adapter';

function IndividualPost(props) {
  const post = props.post;
  const posts = props.posts;
  const setPosts = props.setPosts;
  const token = props.token;

  const navigate = useNavigate();

  async function deleteOnClick(evt) {
    const deletedPost = await deletePost(token, post.id);

    if ('id' in deletedPost) {
      let postsCopy = [...posts];
      postsCopy = postsCopy.filter((post) => {
        return post.id !== deletedPost.id;
      });

      setPosts(postsCopy);
    }
  }

  function onClickEdit(evt) {
    navigate(`post/${post.id}`);
  }

  return (
    <div className="individualPost">
      <div className="post-content">
        <h1>{post.title}</h1>
        <p className="content">{post.content}</p>
        <p className="author">
          by: <strong>{post.author.name}</strong>
        </p>
      </div>
      {post.isAuthor ? (
        <div className="postButtonContainer">
          <Tooltip title="Does not add if it already exists.">
            <Button onClick={onClickEdit} className="edit-button">
              Edit
            </Button>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={deleteOnClick} size="small">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
}

export default IndividualPost;
