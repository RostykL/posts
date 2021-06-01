import { EDIT_POST } from "../types";

export const editPost = (id, title, body) => {
  return async (dispatch) => {
    return fetch("https://bloggy-api.herokuapp.com/posts/" + id, {
      method: "PUT",
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
          type: EDIT_POST,
          payload: res,
        });
      });
  };
};
