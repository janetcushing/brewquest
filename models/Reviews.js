const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
    brewery_id: {
        type: String,
        required: true
    },
    aud: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    body: {
        type: String,
        maxlength: 5000
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Reviews = mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;