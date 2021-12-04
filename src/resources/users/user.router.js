const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getUsers();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = req.body;
  const createdUser = await usersService.createUser(user);
  res.json(createdUser.toResponse());
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUser(id, id);
  res.json(user.toResponse());
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await usersService.updateUser(id, user);
  res.json(updatedUser.toResponse());
});

router.route('/').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.deleteUser(id);
  res.status(201);
  res.json({});
});

module.exports = router;
