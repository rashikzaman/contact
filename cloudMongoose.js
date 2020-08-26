
let cloudMongoose = require("mongoose");

let mongodbConnectionString = "mongodb+srv://rashik:1234!@#$@cluster0.wn9kw.mongodb.net/<dbname>?retryWrites=true&w=majority";


cloudMongoose
    .connect(mongodbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((error) => handleError(error));

const handleError = (error) => {
    console.log("Mongoose Error: " + error);
};

module.exports = cloudMongoose;