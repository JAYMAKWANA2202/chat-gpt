import { useState, useEffect } from "react";
import "../App.css";

export default function Sidebar() {
  const [newChat, setNewChat] = useState([]);
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setNewChat([...newChat, "chat added"]);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  const openBox = () => {
    setToggle(true);
  };
  return (
    <>
      <div className="App">
        {toggle ? (
          <aside className="sidebar">
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
              <button
                style={{
                  backgroundColor: "#202123",
                  border: 0,
                  borderRadius: "50%",
                  width: "30px",
                  color: "white",
                  height: "30px",
                  fontSize: "30px",
                }}
                onClick={closeSidebar}
              >
                x
              </button>
            </div>
            <div className="side-menu-button">
              <button onClick={clickHandler}>
                <span>+</span> New Chat
              </button>
            </div>
            {newChat.map((data) => (
              <div className="side-menu">{data}</div>
            ))}
          </aside>
        ) : (
          <button
            style={{
              backgroundColor: "#202123",
              border: 0,
              borderRadius: "50%",
              width: "30px",
              color: "white",
              height: "30px",
              fontSize: "10px",
            }}
            onClick={openBox}
          >
            ->
          </button>
        )}
        <section className="chatbox">
          <div className="chat-log">
            <div className="chat-message ">
              <div className="chat-message-center">
                <div className="avtar"></div>
                <div className="message">hello world </div>
              </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-center">
                <div className="avtar chatgpt">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width={48} height={1}>
                  <title>{"Rectangle 5"}</title>
                  <path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
                </svg> */}
                </div>
                <div className="message">I am AI</div>
              </div>
            </div>
          </div>
          <div className="chat-input-holder">
            <textarea className="chat-input-textarea" rows="1"></textarea>
          </div>
        </section>
      </div>
    </>
  );
}
