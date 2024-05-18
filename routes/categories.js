// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

// Импортируем вспомогательные функции
const { findAllCategories, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted, sendCategoryById  } = require('../controllers/categories');


categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
// routes/categories.js

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
); 
  categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted, sendCategoryById );
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;