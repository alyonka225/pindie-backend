const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const connectToDAatabbase = require("./database/connect");

const PORT = 3000;
const app = express();
connectToDAatabbase();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    usersRouter,
    gamesRouter,
    categoriesRouter
)

app.listen(PORT, () => {
    console.log(`Server is running on PORT https://localhost:${PORT}`);
})

