const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserById, sendUserDeleted } = require("../controllers/users");
const { findAllUsers, createUser, updateUser, findUserById, deleteUser, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, checkIsUserExists } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;