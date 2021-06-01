import { FETCH_POST_COMMENTS } from "../types";

export const fetchPostComments = (id) => {
  return async (dispatch) => {
    return fetch(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: FETCH_POST_COMMENTS,
          payload: res.comments,
        });
      })
  };
};
