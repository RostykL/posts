import { DELETE_POST } from "../types";

export const deletePost = (id) => {
  return async (dispatch) => {
    return fetch(`https://bloggy-api.herokuapp.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETE_POST,
          payload: id,
        });
      });
  };
};
