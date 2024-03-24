import React from "react";

function UserInfo({ loggedInUser }) {
  return (
    <>
      <div>
        <p>
          <strong>Name:</strong> {loggedInUser.name}
        </p>
        <p>
          <strong>Username:</strong> {loggedInUser.username}
        </p>
        <p>
          <strong>Email:</strong> {loggedInUser.email}
        </p>
        <p>
          <strong>City:</strong> {loggedInUser.address.city}
        </p>
        <p>
          <strong>Street:</strong> {loggedInUser.address.street}
        </p>
        <p>
          <strong>Phone:</strong> {loggedInUser.phone}
        </p>
        <p>
          <strong>Website:</strong> {loggedInUser.website}
        </p>
      </div>
    </>
  );
}

export default UserInfo;
