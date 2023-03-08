import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/joy/Chip';
import { getPosts, newPost } from '../api-adapter';
import { IndividualPost } from './';

const Posts = (props) => {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;


  const navigate = useNavigate();

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
      <div className="post-list-parent">
        <Chip onClick={newPostOnClick} slotProps={{ action: { href: '' } }}>
          New Post
        </Chip>
        <div className="post-list" id="post-list">
          {[...posts]
            .filter((post) => {
              return post.active;
            })
            .reverse()
            .map((post, idx) => {
            return (
              <IndividualPost post={post} posts={posts} setPosts={setPosts} token={token} key={`IndividualPost${idx}`} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
