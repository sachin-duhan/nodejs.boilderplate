const {Router} = require('express');
const {crud_controller} = require('./crud');

const crud_router = (Model) => {
  const router = Router();
  const controller = crud_controller(Model);

  router.post('/', controller.create)
  router.get('/', controller.find)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  return router;
}

module.exports = {crud_router};
