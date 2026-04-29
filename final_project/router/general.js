const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`);
        return res.data;
    } catch (err) {
        return { error: err.message };
    }
}

// Get by ISBN
async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`${BASE_URL}/books/${isbn}`);
        return res.data;
    } catch (err) {
        return { error: err.message };
    }
}

// Get by Author
async function getBookByAuthor(author) {
    try {
        const res = await axios.get(`${BASE_URL}/books/author/${author}`);
        return res.data;
    } catch (err) {
        return { error: err.message };
    }
}

// Get by Title
async function getBookByTitle(title) {
    try {
        const res = await axios.get(`${BASE_URL}/books/title/${title}`);
        return res.data;
    } catch (err) {
        return { error: err.message };
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};