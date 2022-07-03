const mongoose = require("mongoose");

const requirementsSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    requirements: {
        type: String,
        require: true,
    },
    deliveryDate: {
        type: Date,
        require: true,
    },
    industryTag: {
        type: String,
        require: true,
    },
    contact: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("Requirements", requirementsSchema);