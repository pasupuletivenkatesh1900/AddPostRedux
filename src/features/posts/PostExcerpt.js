import React from "react";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";

const PostExcerpt = ({ post }) => {
  console.log(post);
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0,100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.author} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
