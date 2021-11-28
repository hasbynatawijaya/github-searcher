import React from "react";

import "./style.scss";

const UserCard = ({ item }) => {
  return (
    <div className="user">
      <div className="user__avatar">
        <img
          className="user__avatar-img"
          alt={item.login}
          src={item.avatar_url}
          width={35}
          height={35}
        />
        <p href={item.html_url} target="_blank" className="user__avatar-text">
          {item.login}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
