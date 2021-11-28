import React from "react";

import "./style.scss";

const index = ({ item }) => {
  return (
    <div className="repo">
      <div className="repo__owner">
        <img
          className="repo__owner-img"
          alt={item.owner.login}
          src={item.owner.avatar_url}
          width={35}
          height={35}
        />
        <a
          href={item.owner.html_url}
          target="_blank"
          className="repo__owner-text"
        >
          {item.owner.login}
        </a>
      </div>
      <div className="repo__details">
        <div>
          <p className="repo__details-title">Name</p>
          <p className="repo__details-text">{item.name}</p>
        </div>
        <div>
          <p className="repo__details-title">Descriptions</p>
          <p className="repo__details-text">{item.description}</p>
        </div>
        <div>
          <p className="repo__details-title">Stars</p>
          <p className="repo__details-text">{item.stargazers_count}</p>
        </div>
        <div>
          <p className="repo__details-title">Forks</p>
          <p className="repo__details-text">{item.forks_count}</p>
        </div>
        <div>
          <p className="repo__details-title">Watchers</p>
          <p className="repo__details-text">{item.watchers_count}</p>
        </div>
        <div>
          <p className="repo__details-title">License</p>
          <p className="repo__details-text">
            {item.license ? item.license.name : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
