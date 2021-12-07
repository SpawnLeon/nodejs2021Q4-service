const USERS = [];

const getUsers = async () => USERS;

const createUser = async (user) => {
  USERS.push(user);
  return user;
};

const getUser = async (id) => USERS.find((u) => u.id === id);

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
  const idx = USERS.findIndex((u) => u.id === id);
  if (idx === -1) {
    return null;
  }
  const deletedUser = USERS[idx];
  USERS.splice(idx, 1);
  return deletedUser;
};

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
