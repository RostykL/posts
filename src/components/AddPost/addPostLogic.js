import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../../redux/actions/addPost";

export default function useAddNewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  function addSinglePost(e) {
    e.preventDefault();
    dispatch(addPost(title, body));
    history.push("/");
  }
  const setNewTitle = (title) => {
    setTitle(title);
  };
  const setNewBody = (body) => {
    setBody(body);
  };
  return { setNewTitle, setNewBody, title, body, addSinglePost };
}
