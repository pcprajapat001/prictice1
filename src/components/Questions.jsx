import React, { useState } from 'react';

export function Questions() {
  const [borderRadius, setBorderRadius] = useState(0);
  const [borwid, setBorwid] = useState(0);
  const [btnname, btnName] = useState("Your typed text visible here");

  const handleRadiusChange = (event) => {
    setBorderRadius(bor);
  };
  const handleBorwidChange = (event) => {
    setBorwid(event.target.value);
  };
  const handleBtnName = (event) => {
    btnName(event.target.value);
  };

  const myStyle = {
    
    borderRadius: `${borderRadius}px`, // Apply border radius here
    width: '200px',
    height: '100px',
    padding: '30px',
    border : `${borwid}px solid red`
  };

  return (
    <div className='sub
    '>
      <h5 style={myStyle}>{btnname}</h5>
      <label>Border Radius:</label>
      <button
        
        value={borderRadius}
        onClick={handleRadiusChange}
      />
      <button
        type="range"
        min="0"
        
        max="50"
        value={borwid}
        onClick={handleBorwidChange}
      />
      <label htmlFor="">Type Your Text</label>
      <input id='txt'
        type="text"
        
        // value={ btnName}
        onChange={handleBtnName}
      />
      <p>Border Radius: {borderRadius}px</p>
      <p>Border Width: {borwid}px</p>
    </div>
  );
}


