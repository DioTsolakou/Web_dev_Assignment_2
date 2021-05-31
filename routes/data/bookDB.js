const mongo = require('mongoose');
const dbURL = "mongodb+srv://dio:webdev2021ex2@web-dev-2021.zyknb.mongodb.net/BookSearcher?retryWrites=true&w=majority";

mongo.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log("Connected!"))
    .catch((error) => console.log(error));

const schema = mongo.Schema;
const bookSchema = new schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        unique: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    review: String
});

const BookModel = mongo.model('FavBook', bookSchema)

module.exports = BookModel;