import React from "react";
import "./greeting.css"
function Button({ buttonStyle, text, onClick, variant = "primary" }) {
    
  
    if (variant === "primary") {
      buttonStyle = { ...buttonStyle, backgroundColor: "blue", color: "white" };
    } else if (variant === "secondary") {
      buttonStyle = { ...buttonStyle, backgroundColor: "gray", color: "white" };
    }
  
    return (
      <button style={buttonStyle} onClick={onClick}>
        {text}
      </button>
    );
    
  }

  export default Button;