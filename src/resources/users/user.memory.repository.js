const USERS = [];

const getUsers = async () => USERS;

const createUser = async (user) => {
  USERS.push(user);
  return user;
};

const getUser = async (id) => USERS.find((user) => user.id === id);

const updateUser = async (id, userData) => {
  const user = await getUser(id);
  if (!user) {
    return null;
  }

  const updatedUser = { ...user, ...userData };

  const idx = USERS.findIndex((el) => el.id === id);

  USERS[idx] = updatedUser;

  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await getUser(id);
  const index = USERS.indexOf(user);
  USERS.splice(index, 1);
};

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
