// Файл routes/games.js

const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted, sendGameById } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
); 
  gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    checkAuth,
    deleteGame,
    sendGameDeleted, // Тут будут функция удаления элементов из MongoDB и ответ клиенту
    sendGameById
  ); 



module.exports = gamesRouter;