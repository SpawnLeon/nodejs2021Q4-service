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
  res.status(201).json(User.toResponse(createdUser));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUser(id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await usersService.updateUser(id, user);

  if (!updatedUser) {
    res.status(404).json({ message: 'User not found' });
  }

  res.json(User.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await usersService.deleteUser(id);
  if (!deletedUser) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.status(204).send();
});

module.exports = router;
