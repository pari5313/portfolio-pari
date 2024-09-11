import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1600</div>
        <span  style={{color: darkMode?'white':''}}>rating </span>
        <span>leetcode</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1500+</div>
        <span  style={{color: darkMode?'white':''}}>rating </span>
        <span>codechef</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>projects</span>
      </div>
    </div>
  );
};

export default Experience;
