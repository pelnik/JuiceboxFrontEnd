import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Register, PostForm, EditPost } from '.';
import { getPosts } from '../api-adapter';
import Login from './Login';
import { getToken } from '../utils/localStorage.js';
import Posts from './Posts';

function Main() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);

  async function fetchPosts(token) {
    const allPosts = await getPosts(token);

    if (allPosts !== undefined) {
      setPosts(allPosts);
    }
  }

  useEffect(() => {
    fetchPosts(token);
  }, [token]);

  useEffect(() => {
    const localToken = getToken();
    setToken(localToken);
  }, []);

  return (
    <div className="jbMainContainer" id="jbMainContainer">
      <Navbar setToken={setToken} token={token} />
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route
          path="/post"
          element={<PostForm token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/post/:id"
          element={<EditPost token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="*"
          element={<Posts posts={posts} setPosts={setPosts} token={token} />}
        />
      </Routes>
    </div>
  );
}

export default Main;
