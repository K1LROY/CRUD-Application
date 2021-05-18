import { APP_ACTION_ADD } from "../constats";
import PostForm from "../components/PostForm";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTION_ADD:
      return { ...state, PostForm };

    default:
      return state;
  }
};
