import React, { useState } from "react";

function AppUserPostBtn({ handleUserPostsClick }) {
  const [showUserPosts, setShowUserPosts] = useState(false);
  const toggleShowUserPosts = () => {
    setShowUserPosts((prevState) => !prevState);
    handleUserPostsClick();
  };
  return (
    <button className={"post__name_btPost"} onClick={toggleShowUserPosts}>
      {showUserPosts ? "Close Posts" : "Show My Posts"}
    </button>
  );
}

export default AppUserPostBtn;
