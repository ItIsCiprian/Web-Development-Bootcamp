/**
 * Book Notes Capstone - Data Model and Helpers
 * Structure for books and notes (e.g. for a reading tracker or notes app).
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const bookSchema = {
  id: "string or number",
  title: "string",
  author: "string",
  isbn: "string (optional)",
  status: "reading | completed | to-read",
  rating: "number 1-5 (optional)",
};

const noteSchema = {
  id: "string or number",
  bookId: "references book",
  content: "string",
  page: "number (optional)",
  createdAt: "Date or ISO string",
};

let books = [];
let notes = [];
let bookId = 1;
let noteId = 1;

function addBook({ title, author, isbn = "", status = "to-read", rating = null }) {
  const book = { id: bookId++, title, author, isbn, status, rating };
  books.push(book);
  return book;
}

function addNote(bookId, content, page = null) {
  const note = {
    id: noteId++,
    bookId,
    content,
    page,
    createdAt: new Date().toISOString(),
  };
  notes.push(note);
  return note;
}

function getBooks() {
  return [...books];
}

function getBookById(id) {
  return books.find((b) => b.id === Number(id) || b.id === id);
}

function getNotesForBook(bookId) {
  return notes.filter((n) => n.bookId === Number(bookId) || n.bookId === bookId);
}

function updateBook(id, updates) {
  const book = getBookById(id);
  if (!book) return null;
  Object.assign(book, updates);
  return book;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    bookSchema,
    noteSchema,
    addBook,
    addNote,
    getBooks,
    getBookById,
    getNotesForBook,
    updateBook,
  };
}
