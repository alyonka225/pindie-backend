const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
};

const findUserById = async (req, res, next) => {
    try {
        req.user = await users.findById(req.params.id);
        next();
    } catch (err) {
        res.status(404).send({message: "User not found"});
    }
};

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        req.user = await users.create(req.body);
        next();
    } catch (err) {
        res.status(400).send({message: "Error creating user"});
    }
};

const updateUser = async (req, res, next) => {
    try {
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (err) {
        res.status(400).send({message: "Error updating user"});
    }
};

const deleteUser = async(req, res, next) => {
    try {
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (err) {
        res.status(400).send({message: "Error deleting user"});
    }
};

const checkEmptyNameAndEmailAndPassword = async(req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({message: "Введите имя пользователя, email и пароль"}));
    } else {
        next();
    }
};

const checkEmptyNameAndEmail = async(req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({message: "Введите имя пользователя и email"});
    } else {
        next();
    }
};

const checkIsUserExists = async(req, res, next) => {
        const isInArray = req.usersArray.find((user) => {
        return req.body.email === user.email;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({message: "Пользователь с таким email уже существует"}));
    } else {
        next();
    }
};    

module.exports = {findAllUsers, findUserById, createUser, updateUser, deleteUser, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, checkIsUserExists};