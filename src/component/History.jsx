import React from "react";
import "../assets/styles/history.css";

export default function History(props) {
  return (
    <>
      <div style={{ color: 'white', backgroundColor: 'rgba(52,53,65,0.9)', margin: '5px', borderRadius: '5px', height: '40px', paddingTop: '8px' }}> <i className="fa fa-comments" style={{ color: 'white', marginRight: '10px' }}></i>{props.lable}</div>
    </>
  );
}
