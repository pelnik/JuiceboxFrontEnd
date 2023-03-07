import React from 'react';

function IndividualPost(props) {
  const post = props.post;

  return (
    <div className="individualPost">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author.name}</p>
    </div>
  );
}

export default IndividualPost;
