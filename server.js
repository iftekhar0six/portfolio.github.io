const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const hbs = require("hbs");
const path = require("path");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.render("index");
})

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.set("view engine", "hbs");
app.use(morgan('tiny'));

app.listen(PORT, () => {
    console.log(`app running http://localhost:${PORT}`);
})


