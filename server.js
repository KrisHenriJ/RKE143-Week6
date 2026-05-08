//const express = require("express");
//const port = 3000;
//const booksRouter = require("./routes/books");

//const app = express();

//app.set("view engine", "ejs");

//app.get("/", (request, response) => {
    
    //response.send("<h1>Hello from app get /<h1>");
    //response.sendStatus(500);
    //response.status(500).json({message: "Internal error. Try again laher."});
    //response.download("server.js");
    //response.render("index");
//});

//app.use("/books", booksRouter);


//app.listen(port, () => {
    //console.log(`Server is running on port ${port}.`);
//});


const express = require("express");
const port = 3000;
const countryRouter = require("./routes/countries");

const app = express();

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    
    //response.send("<h1>Hello from app get /<h1>");
    //response.sendStatus(500);
    //response.status(500).json({message: "Internal error. Try again laher."});
    //response.download("server.js");
    response.render("index");
});

app.use("/country", countryRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});