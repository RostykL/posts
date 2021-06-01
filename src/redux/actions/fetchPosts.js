import { FETCH_POSTS, FETCH_POSTS_FAILED } from "../types";

export const fetchPosts = () => {
  return async (dispatch) => {
    return fetch("https://bloggy-api.herokuapp.com/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_POSTS,
          payload: res,
        });
      })
      .catch((e) => {
        dispatch({
          type: FETCH_POSTS_FAILED,
          payload: e,
        });
      });
  };
};
