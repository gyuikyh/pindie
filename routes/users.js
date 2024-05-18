// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js");
// Импортируем вспомогательные функции
const { findAllUsers, createUser, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkIsUserExists, checkEmptyNameAndEmail, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted, sendUserById, sendMe } = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers, sendUserById);
// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
); 
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
); 
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  usersRouter.get("/me", checkCookiesJWT, checkAuth, sendMe);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;