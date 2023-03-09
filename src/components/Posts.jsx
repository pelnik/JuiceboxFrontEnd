import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IndividualPost } from './';
import Chip from '@mui/material/Chip';

import logo from '../Media/BevIcon.png';

const Posts = (props) => {
  const token = props.token;
  const posts = props.posts;
  const setPosts = props.setPosts;

  const navigate = useNavigate();

  function newPostOnClick(evt) {
    navigate('/post');
  }

  return (
    <div id="full-post-page">
      <div className="postPage" id="postPage">
        <div className="post-list-parent">
          <div className="jb-logo-container">
            <img className="jb-logo" src={logo} alt="logo" />
            <h1 className="site-header">JuiceBox</h1>
          </div>
          <Chip
            onClick={newPostOnClick}
            className="new-post-button"
            sx={{ backgroundColor: '#9BC2BF', color: 'white' }}
            label="New Post"
          />
          <div className="post-list" id="post-list">
            {[...posts]
              .filter((post) => {
                return post.active;
              })
              .reverse()
              .map((post, idx) => {
                return (
                  <IndividualPost
                    post={post}
                    posts={posts}
                    setPosts={setPosts}
                    token={token}
                    key={`IndividualPost${idx}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <p className="attr">
        Icon provided by https://creativemarket.com/eucalyp
      </p>
    </div>
  );
};

export default Posts;
