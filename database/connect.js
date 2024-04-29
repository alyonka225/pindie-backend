const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/Pindie"

async function connectToDAatabbase() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Успешно подключились к MongoDB");
    } 
    catch (err) {
        console.log("При подключении к MongoDB произошла ошибка");
        console.log(err);
    }
};

module.exports = connectToDAatabbase;