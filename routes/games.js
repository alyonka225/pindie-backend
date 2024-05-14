const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameById, sendGameDeleted } = require("../controllers/games");
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post('/games', findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);
gamesRouter.put('/games/:id', findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;