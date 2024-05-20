import React from "react";
// import "./BookList.css";

export const BookList = ({ books, onSelectBook, onAddBook }) => {
  return (
    <div className="book-list">
      <h2 style={{ marginTop: "30px" }}>My Books 📚 </h2>
      <button className="add-button" onClick={onAddBook}>
        ➕ Add New Book
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => onSelectBook(book)}>
            <h3>{book.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
