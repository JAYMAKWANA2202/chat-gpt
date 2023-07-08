import React from "react";
import "../assets/styles/below.css";

export default function Below(props) {

  const ResetDataHandler = () => {
    props.ResetData()
  }
  return (
    <div className="below-section">
      <div className="row" style={{ color: 'white', margin: '5px', borderRadius: '5px', height: '40px', paddingTop: '8px', cursor: 'pointer' }} onClick={ResetDataHandler}>
        <div className="col-2 p-0" style={{ textAlign: 'end' }}><i className="fa fa-comments"></i></div>
        <div className="col-10 ">Clear Conversations</div>
      </div>

      <div className="row" style={{ color: 'white', margin: '5px', borderRadius: '5px', height: '40px', paddingTop: '8px' }}>
        <div className="col-2 p-0" style={{ textAlign: 'end' }}><i className="fa fa-cog"></i></div>
        <div className="col-10 ">Setting</div>
      </div>

      <div className="row" style={{ color: 'white', margin: '5px', borderRadius: '5px', height: '40px', paddingTop: '8px' }}>
        <div className="col-2 p-0" style={{ textAlign: 'end' }}><i className="fa fa-user"></i></div>
        <div className="col-10 ">Profile</div>
      </div>
      {/* Add more buttons as needed */}
    </div>
  );
}
