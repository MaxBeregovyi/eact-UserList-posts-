import React, { useState } from "react";

function AppInfoBtn({ handleInfoClick }) {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const toggleShowUserInfo = () => {
    setShowUserInfo((prevState) => !prevState);
    handleInfoClick();
  };
  return (
    <>
      <button className={"post__name_btInfo"} onClick={toggleShowUserInfo}>
        {showUserInfo ? "Close Info" : "Information"}
      </button>
    </>
  );
}

export default AppInfoBtn;
