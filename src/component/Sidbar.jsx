import React from "react";
import "../assets/styles/sidbar.css";
import History from "./History";
import Below from "./Below";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="above-section">
        <button className="new-chat-button">
          <span>+</span>New Chat
        </button>
      </div>
      <History />
      <Below />
    </div>
  );
};

export default Sidebar;
