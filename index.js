const express = require("express");
const app = express();
app.use(express.json());

const books = {
  "1": { title: "Book1", author: "Author1", reviews: {} }
};

let users = [];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:isbn", (req, res) => {
  res.json(books[req.params.isbn]);
});

app.get("/books/author/:author", (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

app.get("/books/title/:title", (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

app.get("/books/review/:isbn", (req, res) => {
  res.json(books[req.params.isbn].reviews);
});

app.post("/register", (req, res) => {
  users.push(req.body);
  res.send("User successfully registered");
});

app.post("/customer/login", (req, res) => {
  res.send("Login successful");
});

app.put("/customer/auth/review/:isbn", (req, res) => {
  books[req.params.isbn].reviews["user"] = req.body.review;
  res.send("Review added");
});

app.delete("/customer/auth/review/:isbn", (req, res) => {
  delete books[req.params.isbn].reviews["user"];
  res.send("Review deleted");
});

app.listen(5000, () => console.log("Server running"));