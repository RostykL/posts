import {
  FETCH_POSTS,
  FETCH_POSTS_FAILED,
  ADD_POST,
  ADD_POST_FAILED,
  FETCH_POST_COMMENTS,
  SELECT_POST,
  FETCH_ADD_COMMENTS,
  DELETE_POST,
  EDIT_POST,
} from "../types";

const initialState = {
  posts: [],
  post: {
    id: null,
    title: "",
    body: "",
    comments: [],
  },
  loading: true,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [...state.posts, action.payload],
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case FETCH_POST_COMMENTS:
      return {
        ...state,
        loading: false,
        error: null,
        post: {
          ...state.post,
          comments: action.payload,
        },
      };
    case FETCH_ADD_COMMENTS:
      return {
        ...state,
        loading: false,
        error: null,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
      };
    case SELECT_POST:
      return {
        ...state,
        loading: false,
        error: null,
        post: { ...state.post, ...action.payload },
      };

    case DELETE_POST:
      return {
        ...state,
        loading: false,
        error: null,
        posts: state.posts.filter((el) => el.id !== action.payload),
      };

    case EDIT_POST:
      return {
        ...state,
        loading: false,
        error: null,
        posts: state.posts.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload
          }
          return el;
        }),
      };
    default:
      return { ...state };
  }
};

export default postsReducer;
