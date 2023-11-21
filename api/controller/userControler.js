const { StatusCodes } = require("http-status-codes");

const userController = {
  getSomething: (req, res) => {
    return res.status(StatusCodes.OK).json({
      message: "checking..",
      data: null,
    });
  },
};

module.exports = userController;
