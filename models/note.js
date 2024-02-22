const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',// Reference to User model's _id
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
