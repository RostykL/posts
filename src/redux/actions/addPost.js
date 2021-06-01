import { ADD_POST, ADD_POST_FAILED } from "../types";

export const addPost = (title, body) => {
  return async (dispatch) => {
    return fetch("https://bloggy-api.herokuapp.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: ADD_POST,
          payload: res,
        });
      })
      .catch((e) => {
        dispatch({
          type: ADD_POST_FAILED,
          payload: e,
        });
      });
  };
};
