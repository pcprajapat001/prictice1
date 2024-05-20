import React, { useState, useEffect } from "react";
// import "./BookContent.css";

export const BookContent = ({
  selectedBook,
  selectedPageIndex,
  onSaveBook,
  onSavePage,
}) => {
  const [bookTitle, setBookTitle] = useState("");
  const [pageContent, setPageContent] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setBookTitle(selectedBook.title);
      if (selectedPageIndex != null && selectedBook.pages[selectedPageIndex]) {
        setPageContent(selectedBook.pages[selectedPageIndex].content);
        setPageTitle(selectedBook.pages[selectedPageIndex].title);
      } else {
        setPageContent("");
        setPageTitle("");
      }
    }
  }, [selectedBook, selectedPageIndex]);

  const handleSaveBook = () => {
    onSaveBook({ title: bookTitle });
  };

  const handleSavePage = () => {
    onSavePage({ title: pageTitle, content: pageContent });
  };

  return (
    <div className="book-content">
      <div className="content-header">
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Book Title"
        />
        <button onClick={handleSaveBook}>Save Book</button>
      </div>
      <div className="page-header">
        <input
          type="text"
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
          placeholder="Page Title"
        />
        <button onClick={handleSavePage}>Save Page</button>
      </div>
      <textarea
        value={pageContent}
        onChange={(e) => setPageContent(e.target.value)}
        placeholder="Write your content here..."
      />
    </div>
  );
};
