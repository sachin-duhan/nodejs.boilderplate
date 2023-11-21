const { Router } = require("express");
const userController = require("../controller/userControler");

const v1Router = Router();

v1Router.use("/user", userController.getSomething);

module.exports = { v1Router };
