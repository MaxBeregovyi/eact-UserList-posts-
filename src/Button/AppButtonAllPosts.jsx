import React from "react";

function AppButtonAllPosts({ label, clickHandler }) {
  return (
    <button className={"post__name_allPost"} onClick={clickHandler}>
      {label}
    </button>
  );
}

export default AppButtonAllPosts;
