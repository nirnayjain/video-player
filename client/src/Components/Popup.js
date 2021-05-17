import React from "react";
 import '../Style/Popup.css'
const Popup =({setIsOpen,content}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={()=>{setIsOpen(false)}}>x</span>
        {content}
      </div>
    </div>
  );
};
 
export default Popup;