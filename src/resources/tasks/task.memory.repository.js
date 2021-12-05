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
  TASKS.splice(idx, 1);
};

module.exports = {
  getTasksByBoard, createTask, getTask, updateTask, deleteTask,
};
