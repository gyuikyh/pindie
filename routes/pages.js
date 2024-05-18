const pagesRouter = require("express").Router();
const { checkCookiesJWT, checkAuth } = require("../middlewares/auth.js");
const { sendIndex, sendDashboard } = require("../controllers/auth.js");




pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;


