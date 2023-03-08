import React, { useState, useEffect} from "react";
import { getPosts} from '../api-adapter';
import { IndividualPost } from './';

const Posts = (props) => {
  const token = props.token;

  const [posts, setPosts] = useState([]);

  async function fetchPosts(token) {
    const allPosts = await getPosts(token);


    if (allPosts !== undefined
      && ((token === '' && posts.length === 0) || token !== '')
    ) {
      setPosts(allPosts);
    }
  }

  useEffect(() => {
    fetchPosts(token);
  }, [token])

  return (
    <div className="postPage" id="postPage">
      <div className="post-list" id="post-list">
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
