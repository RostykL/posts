import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PostsPage from "./pages/PostsPage/PostsPage";
import PostPage from "./pages/PostPage/PostPage";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/fetchPosts";
import AddPost from "./components/AddPost/AddPost";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!posts.loading ? <PostsPage /> : "Loading..."}
          <AddPost text="Add post" />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
