import React from "react";
import { FaSearch } from "react-icons/fa";
import user from "../img/user.png";


function TopSect() {

  return (
    <div className="top-section">
      <div className="user-info">
        <div className="user-img">
          <img src={user} alt="user" />
        </div>
        <p className="user-name">欢迎👋 A8 号桌</p>

      </div>

      

      <div className="search-box">
        <input type="text" placeholder="搜索..." />
        <i>
          <FaSearch />
        </i>
      </div>
    </div>
  );
}

export default TopSect;
