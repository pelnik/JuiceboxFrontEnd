import React from "react";

function IndividualPost(props) {
  const post = props.post;

  return (
    <div className="individualPost">
      <h1>{post.title}</h1>
      <p className="content">{post.content}</p>
      <p className="author">
        <strong>{post.author.name}</strong>
      </p>
    </div>
  );
}

export default IndividualPost;
