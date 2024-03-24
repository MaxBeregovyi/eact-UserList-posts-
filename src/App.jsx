import React, { useEffect, useState } from "react";
import AppButton from "./Button/AppButton.jsx";
import PostCard from "./PostCard.jsx";
import AppInput from "./AppInput.jsx";
import AppInfoBtn from "./Button/AppInfoBtn.jsx";
import AppUserPostBtn from "./Button/AppUserPostBtn.jsx";
import UserInfo from "./UserInfo.jsx";
import AppButtonAllPosts from "./Button/AppButtonAllPosts.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({
    name: "",
    username: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLogined, setIsLogined] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showUserPosts, setShowUserPosts] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false); // Додали стан для відстеження видимості всіх постів

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const inputHandler = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) =>
        user.name === loginData.name && user.username === loginData.username,
    );
    if (user) {
      setLoggedInUser(user);
      setIsLogined(true);
      getPosts();
    } else {
      alert("Помилка: неправильне ім'я користувача");
    }
  };

  const logoutHandler = () => {
    setIsLogined(false);
    setPosts([]);
    setLoggedInUser(null);
    setShowUserInfo(false);
    setShowUserPosts(false);
    setShowAllPosts(false); // Скидаємо стан видимості всіх постів при виході з системи
  };

  const handleUserPostsClick = () => {
    setShowUserPosts((prevShowUserPosts) => !prevShowUserPosts);
    setShowAllPosts(false); // Закриваємо всі пости, коли відображаються пости користувача
  };

  const handleInfoClick = () => {
    setShowUserInfo((prevShowUserInfo) => !prevShowUserInfo);
    if (showUserPosts) {
      setShowUserPosts(false);
    }
    setShowAllPosts(false);
  };

  const handleAllPostsClick = () => {
    setShowAllPosts((prevShowAllPosts) => !prevShowAllPosts);
    setShowUserPosts(false);
  };

  return (
    <>
      <h1 className={"post__text"}>User-Post-List</h1>
      {isLogined ? (
        <div>
          <div className={"post__name"}>
            {loggedInUser.name}
            <AppInfoBtn handleInfoClick={handleInfoClick} />
            <AppUserPostBtn handleUserPostsClick={handleUserPostsClick} />
            <AppButton label={"LogOut"} clickHandler={logoutHandler} />
            <AppButtonAllPosts
              label={showAllPosts ? "Hide All Posts" : "Show All Posts"}
              clickHandler={handleAllPostsClick}
            />
          </div>
          {showUserInfo && loggedInUser && (
            <UserInfo loggedInUser={loggedInUser} />
          )}
          {(showUserPosts || showAllPosts) && (
            <div>
              {posts
                .filter((post) =>
                  showAllPosts ? true : post.userId === loggedInUser.id,
                )
                .map((item) => (
                  <PostCard key={item.id} item={item} />
                ))}
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <AppInput
            propsType={"text"}
            propsPlaceholder={"name"}
            propsName={"name"}
            inputHandler={inputHandler}
          />
          <AppInput
            propsType={"text"}
            propsPlaceholder={"username"}
            propsName={"username"}
            inputHandler={inputHandler}
          />
          <AppButton label={"login"} clickHandler={submitHandler} />
        </form>
      )}
    </>
  );
}

export default App;
