const axios = require("axios");

// Get all books
async function getAllBooks() {
    const response = await axios.get("http://localhost:5000/books");
    return response.data;
}

// Get books by ISBN
async function getBookByISBN(isbn) {
    const response = await axios.get(`http://localhost:5000/books/${isbn}`);
    return response.data;
}

// Get books by author
async function getBookByAuthor(author) {
    const response = await axios.get(`http://localhost:5000/books/author/${author}`);
    return response.data;
}

// Get books by title
async function getBookByTitle(title) {
    const response = await axios.get(`http://localhost:5000/books/title/${title}`);
    return response.data;
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};