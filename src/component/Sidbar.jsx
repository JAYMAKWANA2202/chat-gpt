import React, { useEffect, useState } from "react";
import "../assets/styles/sidbar.css";
import History from "./History";
import Below from "./Below";

const Sidebar = ({ toggle, setToggleValue }) => {
  const [newChat, setNewChat] = useState([])

  // const [toggle, setToggle] = useState(true)

  const clickHandler = () => {
    var newData = {
      id: 1,
      lable: 'New Conversation'
    }
    setNewChat([newData, ...newChat]);
  };

  const closeSidebar = () => {
    setToggleValue(false);
  };

  const openBox = () => {
    setToggleValue(true);
  };

  const ResetDataEvent = () => {
    setNewChat([])
  }

  return (
    <>
      {toggle ? (
        <aside className="sidebar">
          <div className="above-section">
            <div className="row">

              <button className="new-chat-button col-9" onClick={clickHandler}>
                <i class="fa fa-plus" style={{ marginRight: '8px' }}></i>New Chat
              </button>
              <button className="new-chat-button col-2" style={{ marginLeft: '10px' }} onClick={closeSidebar}>
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div className="middle-section">
            {/* <h3>Search History</h3> */}
            {newChat.map((data) => (
              <>
                <History id={data.id} lable={data.lable} />

              </>
            ))}
          </div>
          <Below ResetData={ResetDataEvent} />
        </aside>
      ) : (<button
        style={{
          border: 0,
          backgroundColor: 'transparent',
          fontSize: "30px",
          marginLeft: '20px',
          marginRight: '20px',
          float: 'left',
          color: 'white'
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
