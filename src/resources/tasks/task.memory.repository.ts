const Task = require('./task.model.js');

const TASKS = [];

const getTasksByBoard = async (boardId) => TASKS.filter((t) => t.boardId === boardId);

const createTask = async (task) => {
  TASKS.push(task);
  return task;
};

const getTask = async (id, boardId) => TASKS
  .find((task) => task.id === id && task.boardId === boardId);

const updateTask = async (taskId, boardId, taskData) => {
  const idx = TASKS.findIndex((t) => t.id === taskId && t.boardId === boardId);
  if (idx === -1) {
    return null;
  }

  const currentTask = TASKS[idx];

  const updatedTask = new Task({ ...currentTask, ...taskData });

  TASKS[idx] = updatedTask;
  return updatedTask;
};

const deleteTask = async (taskId, boardId) => {
  const idx = TASKS.findIndex((t) => t.id === taskId && t.boardId === boardId);
  if (idx === -1) {
    return null;
  }
  const deletedTask = TASKS[idx];

  TASKS.splice(idx, 1);

  return deletedTask;
};

const deleteUserFromTask = async (userId) => {
  const tasks = TASKS.filter((t) => t.userId === userId);

  tasks.forEach((t) => {
    const idx = TASKS.findIndex((task) => task.id === t.id);
    if (idx !== -1) {
      TASKS[idx].userId = null;
    }
  });
};

const deleteTaskByBoard = async (boardId) => {
  const tasks = TASKS.filter((t) => t.boardId === boardId);

  tasks.forEach((t) => {
    const idx = TASKS.findIndex((task) => task.id === t.id);
    if (idx !== -1) {
      TASKS.splice(idx, 1);
    }
  });
};

module.exports = {
  getTasksByBoard,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteUserFromTask,
  deleteTaskByBoard,
};
