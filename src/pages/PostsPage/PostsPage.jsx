import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../../components/Post/Post";

export default function PostsPage() {
  const data = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      {data.posts.map((el) => {
        return <Post {...el} key={el.id} />;
      })}
    </div>
  );
}
