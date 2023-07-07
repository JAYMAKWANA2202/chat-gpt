import React, { useEffect, useState } from "react";
import "../assets/styles/sidbar.css";
import History from "./History";
import Below from "./Below";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [newChat, setNewChat] = useState([])
  const [toggle, setToggle] = useState(true)

  const clickHandler = () => {
    var newData = {
      id: 1,
      lable: 'New Conversation'
    }
    setNewChat([newData, ...newChat]);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  const openBox = () => {
    setToggle(true);
  };

  return (
    <>
      {toggle ? (
        <aside className="sidebar">
          <div className="above-section">
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
              <button
                style={{
                  backgroundColor: "#202123",
                  border: 0,
                  borderRadius: "50%",
                  width: "30px",
                  color: "white",
                  height: "30px",
                  fontSize: "18px",
                  color: 'white'
                }}
                onClick={closeSidebar}
              >
                <i className="fa fa-window-close" style={{ color: 'white' }}></i>
              </button>
            </div>
            <button className="new-chat-button" onClick={clickHandler}>
              <span>+</span>New Chat
            </button>
          </div>
          <div className="middle-section">
            {/* <h3>Search History</h3> */}
            {newChat.map((data) => (
              <>
                <div style={{ color: 'white', backgroundColor: 'rgba(52,53,65,0.9)', margin: '5px', borderRadius: '5px', height: '40px', paddingTop: '8px' }}> <i class="fa-solid fa-messages" style={{ color: 'white' }}></i>{data.lable}</div>
              </>
            ))}
          </div>
          <Below />
        </aside>
      ) : (<button
        style={{
          border: 0,
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "30px",
        }}
        onClick={openBox}
      >
        <i className="fa fa-bars"></i>
      </button>
      )}

    </>
  );
};

export default Sidebar;
