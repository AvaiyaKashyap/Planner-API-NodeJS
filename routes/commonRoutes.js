const express = require('express');
const { registerUser } = require("../controllers/signin/registerUserController");
const { loginUser } = require('../controllers/signin/loginUserController');
const { auth } = require('../middleware/auth');
const { createTask } = require('../controllers/createTaskController');
const { getTasks } = require('../controllers/gettaskController');

const commonRouter = express.Router();

// Register a new user
commonRouter.post('/register', registerUser);

// Login a user
commonRouter.post('/login', loginUser);

// Create a task (requires authentication)
commonRouter.post('/tasks', auth, createTask);

// Get tasks associated with the authenticated user (requires authentication)
commonRouter.get('/tasks', auth, getTasks);

module.exports = commonRouter;
