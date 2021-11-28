import React from "react";

import githubLogo from "../../../assets/logo/github-logo.png";

import "./style.scss";
import Content from "./components/Content";

const Main = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchType, setSearchType] = React.useState("users");

  return (
    <div className="main">
      <div className="main__head">
        <img className="main__head-logo" src={githubLogo} alt="github-logo" />
        <div>
          <p className="main__head-title">Github Searcher</p>
          <div className="main__head-text">
            Search users or repositories below
          </div>
        </div>
      </div>
      <div className="main__search">
        <div className="main__search-text-field">
          <input
            type="text"
            placeholder="Typing to search users or repositories ...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="main__search-select">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
          </select>
        </div>
      </div>
      <Content searchType={searchType} searchTerm={searchTerm} />
    </div>
  );
};

export default Main;
