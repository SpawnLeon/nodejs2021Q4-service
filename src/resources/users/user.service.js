const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service.js');
const User = require('./user.model');

const getUsers = async () => usersRepo.getUsers();

const createUser = async (userData) => {
  const createdUser = new User({ ...userData });
  return usersRepo.createUser(createdUser);
};

const getUser = async (id) => usersRepo.getUser(id);

const updateUser = async (id, userData) => usersRepo.updateUser(id, userData);

const deleteUser = async (id) => {
  const deletedUser = await usersRepo.deleteUser(id);
  await taskService.deleteUserFromTask(id);

  return deletedUser;
};

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
