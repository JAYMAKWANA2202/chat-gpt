import React, { useState } from "react";
import "../assets/styles/sidbar.css";
import History from "./History";
import Below from "./Below";

const Sidebar = () => {
  const [newChat, setNewChat] = useState([]);
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    var newData = {
      id:1,
      lable:'New Conversation'
    }
    setNewChat([...newChat, newData]);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  const openBox = () => {
    setToggle(true);
  };
  return (
    <div className="sidebar">
      <div className="above-section">
        <button className="new-chat-button" onClick={clickHandler}>
          <span>+</span>New Chat
        </button>
      </div>
      <div className="middle-section">
      {/* <h3>Search History</h3> */}
      {newChat.map((data) => (
        <>
        <div style={{color:'white', backgroundColor:'rgba(52,53,65,0.9)', margin:'5px', borderRadius:'5px', height:'40px', paddingTop:'8px'}}>{data.lable}</div>
        </>
      ))}
      </div>
      {/* Display search history here */}
      <Below />
    </div>
  );
};

export default Sidebar;
