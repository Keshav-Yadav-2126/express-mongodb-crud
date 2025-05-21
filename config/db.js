const mongoose = require("mongoose")

function connectDB() {
    const db = mongoose.connect(process.env.mongoUrl);
    return db
}

module.exports = connectDB;