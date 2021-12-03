const USERS = [];

const getUsers = async () => USERS;

const createUser = async (user) => {
  USERS.push(user);
  return user;
};

const getUser = async (id) => USERS.find((user) => user.id === id);

const updateUser = async (user) => {
  const index = USERS.indexOf(user);
  USERS[index] = user;
};

const deleteUser = async (id) => {
  const user = await getUser(id);
  const index = USERS.indexOf(user);
  USERS.splice(index, 1);
};

module.exports = {
  getUsers, createUser, getUser, updateUser, deleteUser,
};
