const Note = require('../models/note');

exports.getTasks = async (req, res) => {
    try {
        // Extract user ID from the authenticated user
        const userId = req.user._id;

        // Fetch notes associated with the authenticated user
        const notes = await Note.find({ userId });

        res.status(200).json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
