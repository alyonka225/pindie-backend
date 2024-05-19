const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api");

const PORT = 3000;
const app = express();
connectToDatabase();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    apiRouter
)

app.listen(PORT, () => {
    console.log(`Server is running on PORT https://localhost:${PORT}`);
})

