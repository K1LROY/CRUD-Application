import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllPost from "./components/AllPost";
import PostForm from "./components/PostForm";

export default function App() {
  const appReducer = useSelector(({ appReducer }) => appReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <PostForm />
      <AllPost />
    </div>
  );
}
