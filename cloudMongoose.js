
let cloudMongoose = require("mongoose");
let mongodbConnectionString = "mongodb+srv://rashik:JMu9PlZIFo1226OW@cluster0.wn9kw.mongodb.net/contact?retryWrites=true&w=majority";

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