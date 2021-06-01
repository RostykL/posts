import { FETCH_ADD_COMMENTS } from "../types";

export const addPostComments = (id, body) => {
  return async (dispatch) => {
    return fetch("https://bloggy-api.herokuapp.com/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
        body: body,
      })
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_ADD_COMMENTS,
          payload: res,
        });
      });
  };
};
