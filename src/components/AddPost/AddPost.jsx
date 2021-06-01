import React from "react";
import useAddNewPost from "./addPostLogic";

export default function AddPost({text}) {
  const { setNewTitle, setNewBody, addSinglePost } = useAddNewPost();

  return (
    <div>
      {text}
      <hr />
      <div> Add one:</div>
      <div>
        <form>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="body"
            onChange={(e) => setNewBody(e.target.value)}
          />
          <div>
            <button onClick={(e) => addSinglePost(e)}>ADD ONE</button>
          </div>
        </form>
      </div>
    </div>
  );
}
