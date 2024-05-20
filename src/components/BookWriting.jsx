import React, { useState, useEffect } from "react";
import { PageList } from "./PageList";
import { ResizableBox } from "react-resizable";
import { BookList } from "./BookList";
import { BookContent } from "./BookContent";
// import BookList from "./BookList";
// import PageList from "./PageList";
// import BookContent from "./BookContent";
// import { ResizableBox } from "react-resizable";
// import "react-resizable/css/styles.css";
// import "./BookWriting.css";

export const BookWriting = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedPageIndex, setSelectedPageIndex] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks && storedBooks.length > 0) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleSaveBook = (book) => {
    if (selectedBook && selectedBook.id != null) {
      setBooks(
        books.map((b) => (b.id === selectedBook.id ? { ...b, ...book } : b))
      );
    } else {
      const newBook = { id: books.length, ...book, pages: [] };
      setBooks([...books, newBook]);
      setSelectedBook(newBook);
    }
    setSelectedPageIndex(null);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setSelectedPageIndex(null);
  };

  const handleAddBook = () => {
    setSelectedBook({ id: null, title: "", pages: [] });
    setSelectedPageIndex(null);
  };

  const handleSavePage = (page) => {
    const updatedBook = {
      ...selectedBook,
      pages:
        selectedPageIndex != null
          ? selectedBook.pages.map((p, index) =>
              index === selectedPageIndex ? { ...p, ...page } : p
            )
          : [...selectedBook.pages, page],
    };
    setBooks(books.map((b) => (b.id === selectedBook.id ? updatedBook : b)));
    setSelectedBook(updatedBook);
    setSelectedPageIndex(updatedBook.pages.length - 1);
  };

  const handleSelectPage = (pageIndex) => {
    setSelectedPageIndex(pageIndex);
  };

  const handleAddPage = () => {
    if (selectedBook) {
      const updatedBook = {
        ...selectedBook,
        pages: [
          ...selectedBook.pages,
          { content: "", title: `Page ${selectedBook.pages.length + 1}` },
        ],
      };
      setBooks(books.map((b) => (b.id === selectedBook.id ? updatedBook : b)));
      setSelectedBook(updatedBook);
      setSelectedPageIndex(updatedBook.pages.length - 1);
    }
  };

  return (
    <div className="book-writing">
      <ResizableBox
        className="book-list-container"
        width={300}
        height={Infinity}
        minConstraints={[150, Infinity]}
        maxConstraints={[300, Infinity]}
      >
        {/* <h2>My Books</h2> */}
        <BookList
          books={books}
          onSelectBook={handleSelectBook}
          onAddBook={handleAddBook}
        />
      </ResizableBox>
      <ResizableBox
        className="page-list-container"
        width={300}
        height={Infinity}
        minConstraints={[150, Infinity]}
        maxConstraints={[300, Infinity]}
      >
        {selectedBook && (
          <>
            <h2>Pages📄 </h2>
            <PageList
              pages={selectedBook.pages}
              onSelectPage={handleSelectPage}
              onAddPage={handleAddPage}
            />
          </>
        )}
      </ResizableBox>
      <ResizableBox
        className="book-content-container"
        width={600}
        height={Infinity}
        minConstraints={[300, Infinity]}
        maxConstraints={[Infinity, Infinity]}
      >
        {selectedBook && (
          <BookContent
            selectedBook={selectedBook}
            selectedPageIndex={selectedPageIndex}
            onSaveBook={handleSaveBook}
            onSavePage={handleSavePage}
          />
        )}
      </ResizableBox>
    </div>
  );
};
