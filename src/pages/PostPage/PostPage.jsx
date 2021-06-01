import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPostComments } from "../../redux/actions/addComment";

export default function PostPage() {
  const [comment, setComment] = useState("");
  const post = useSelector((state) => state.posts).post;
  const dispatch = useDispatch();

  const addComment = () => {
    if (comment.length > 0) {
      dispatch(addPostComments(post.id, comment));
      setComment("");
    }
  };

  return (
    <>
      <div>Title {post.title}</div>
      <div>Body: {post.body}</div>
      <div>
        {post.comments &&
          post.comments.map((el, i) => (
            <div key={el.id}>
              Коментар #{i + 1} {el.body}
            </div>
          ))}
      </div>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={addComment}>add new comment</button>
    </>
  );
}
