import React, { useState } from "react";
import Sidbar from "../component/Sidbar";
import "../assets/styles/chatPage.css"
import SearchContentDiv from "../component/SearchContent";

function ChatPage() {
  const [toggleValue, setToggleValue] = useState(true)
  const isMainDiv = document.getElementById('mainContent')
  if (isMainDiv !== null) {
    if (toggleValue) {
      document.getElementById('mainContent').style.marginLeft = '300px'
    } else {
      document.getElementById('mainContent').style.marginLeft = '0px'
    }
  }
  return (
    <div className="main">
      <Sidbar toggle={toggleValue} setToggleValue={setToggleValue} />
      <SearchContentDiv />
    </div>
  );
}

export default ChatPage;
