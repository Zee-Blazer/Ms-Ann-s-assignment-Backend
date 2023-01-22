const mongoose = require('mongoose');

const SALT_I = 10;


const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
}, { timestamps: true });


const Admin = mongoose.model("User", adminSchema);


module.exports = { Admin };

