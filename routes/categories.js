const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryById, sendCategoryDeleted } = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const { findAllCategories, createCategory, updateCategory, findCategoryById, deleteCategory, checkIsCategoryExists, checkEmptyName } = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.put('/categories/:id', checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;