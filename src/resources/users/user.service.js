const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getUsers = async () => usersRepo.getUsers();

const createUser = async (userData) => {
  const createdUser = new User({ ...userData });
  return usersRepo.createUser(createdUser);
};

const getUser = async (id) => usersRepo.getUser(id);

const updateUser = async (id, userData) => usersRepo.updateUser(id, userData);

const deleteUser = async (id) => usersRepo.deleteUser(id);

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
