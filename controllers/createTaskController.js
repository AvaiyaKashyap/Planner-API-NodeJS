const Note = require('../models/note');

exports.createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    try {
        // Extract user ID from the authenticated user
        const userId = req.user._id;

        // Create a new note with the user's ID
        const noteData = { title, description, dueDate, userId };
        const note = await Note.create(noteData);

        res.status(201).json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
