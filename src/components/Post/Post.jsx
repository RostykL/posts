import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SELECT_POST } from "../../redux/types";

import { PostWrapper, Title, Body } from "./postStyled";

import { fetchPostComments } from "../../redux/actions/fetchPostComments";
import { deletePost } from "../../redux/actions/deletePost";
import { editPost } from "../../redux/actions/editPost";

export default function Post({ title, body, id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const openSinglePost = () => {
    history.push("/post/" + id);
    dispatch(fetchPostComments(id));
    dispatch({ type: SELECT_POST, payload: { title, body, id } });
  };

  const deleteSinglePost = (e) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };

  const editSinglePost = (e) => {
    e.preventDefault();
    const body = prompt("body:");
    const title = prompt("title:");
    if (title && body ) {
      dispatch(editPost(id, title, body));
    }
  };

  return (
    <PostWrapper>
      <div onClick={openSinglePost}>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </div>
      <button onClick={(e) => deleteSinglePost(e)}>delete</button>
      <button onClick={(e) => editSinglePost(e)}>edit</button>
    </PostWrapper>
  );
}
