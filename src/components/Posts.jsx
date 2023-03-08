import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/joy/Chip';
import { getPosts, newPost } from '../api-adapter';
import { IndividualPost } from './';

const Posts = (props) => {
  const token = props.token;
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  async function fetchPosts(token) {
    const allPosts = await getPosts(token);


    if (allPosts !== undefined
      && ((token === '' && posts.length === 0) || token !== '')
    ) {
      setPosts(allPosts);
    }
  }

  function newPostOnClick(evt) {
    navigate('/post');
  }

  useEffect(() => {
    fetchPosts(token);
  }, [token])

  return (
    <div className="postPage" id="postPage">
      <div className="post-list" id="post-list">
        <Chip onClick={newPostOnClick} slotProps={{ action: { href: '' } }}>
          New Post
        </Chip>
        {[...posts].reverse().map((post, idx) => {
          return (
            <IndividualPost post={post} key={`IndividualPost${idx}`} />
          )
        })}
      </div>
    </div>
  );
};

export default Posts;
