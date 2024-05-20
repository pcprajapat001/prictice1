import React from "react";
// import "./PageList.css";

export const PageList = ({ pages, onSelectPage, onAddPage }) => {
  return (
    <div className="page-list">
      <button className="add-page-button" onClick={onAddPage}>
        Add New Page
      </button>
      <ul>
        {pages.map((page, index) => (
          <li key={index} onClick={() => onSelectPage(index)}>
            <h4>{page.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
