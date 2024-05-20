import React, { useState } from "react";

export function Questions() {
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0); // Corrected variable name
  const [buttonText, setButtonText] = useState(""); // Empty string for initial state

  const handleRadiusChange = (event) => {
    // Access the value from a separate input element (not a button)
    const newRadius = parseInt(event.target.value); // Assuming a number input
    setBorderRadius(newRadius);
  };

  const handleBorderWidthChange = (event) => {
    setBorderWidth(parseInt(event.target.value)); // Assuming a number input
  };

  const handleBtnNameChange = (event) => {
    setButtonText(event.target.value);
  };

  const myStyle = {
    borderRadius: `${borderRadius}px`,
    width: "200px",
    height: "100px",
    padding: "30px",
    border: `${borderWidth}px solid red`,
  };

  return (
    <div className="sub">
      <h5 style={myStyle}>{buttonText}</h5>
      <label>Border Radius:</label>
      <input
        type="number"
        value={borderRadius}
        onChange={handleRadiusChange}
      />{" "}
      {/* Use an input for radius */}
      <label>Border Width:</label>
      <input
        type="range"
        min="0"
        max="50"
        value={borderWidth}
        onChange={handleBorderWidthChange}
      />
      <label htmlFor="txt">Type Your Text</label>
      <input
        id="txt"
        type="text"
        value={buttonText}
        onChange={handleBtnNameChange}
      />
      <p>Border Radius: {borderRadius}px</p>
      <p>Border Width: {borderWidth}px</p>
    </div>
  );
}
