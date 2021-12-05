const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getUsers = async () => usersRepo.getUsers();

const createUser = async (userData) => {
  const createdUser = new User({ ...userData });
  return usersRepo.createUser(createdUser);
};

const getUser = async (id) => usersRepo.getUser(id);

const updateUser = async (id, userData) => {
  const user = await usersRepo.getUser(id);
  if (!user) {
    return null;
  }
  const updatedUser = { ...user, ...userData };
  return usersRepo.updateUser(updatedUser);
};

const deleteUser = async (id) => usersRepo.deleteUser(id);

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
