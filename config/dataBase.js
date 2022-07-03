const mongoose = require('mongoose');

const config = require("./config");

const dataBaseURL = `mongodb+srv://${config.db.DB_USER}:${config.db.DB_PASS}@cluster0.kngqi.mongodb.net/smarqoCollection?retryWrites=true&w=majority`


mongoose.connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Yahoo! Smarqo Database Is Connected");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })