const { StatusCodes } = require('http-status-codes');

const crud_controller = (Model) => {
  return {
      // CREATE
      create: async (req, res, next) => {
        try {
          const {body} = req;
          const newTask = new Model(body);
          const data = await newTask.save();
          return res.status(StatusCodes.CREATED).json({
            message: "Created",
            data: data
          });
        } catch (error) {
          next(error);
        }
      },

      // READ
      find: async (req, res, next) => {
        try {
          // get handling.
          const data = await Model.find({});
          return res.status(StatusCodes.OK).json({
            message: "ok",
            data: data
          });
        } catch (error) {
          next(error)
        }
      },

      // UPDATE
      update: async(req, res, next) => {
        try {
          const {id} = req.params;
          const data = await Model.findByIdAndUpdate(id, req.body);
          return res.status(StatusCodes.OK).json({
            message: "Recrod updated successfully.",
            data: data
          });
        } catch (error) {
          next(error);
        }
      },

      // DELETE
      delete: async(req, res, next) => {
        try {
          const {id} = req.params;
          const data = await Model.findByIdAndDelete(id);
          return res.status(StatusCodes.OK).json({
            message: "Record deleted successfully.",
            data: data
          });
        } catch (error) {
          next(error);
        }
      }
  }  
}

module.exports = {crud_controller};
