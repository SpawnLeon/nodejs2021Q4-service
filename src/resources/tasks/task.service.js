const tasksRepo = require('./task.memory.repository.js');
const Task = require('./task.model.js');

const getTasksByBoard = async (boardId) => tasksRepo.getTasksByBoard(boardId);

const createTask = async (boardId, task) => {
  const createdTask = new Task({ ...task });
  createdTask.boardId = boardId;
  return tasksRepo.createTask(createdTask);
};

const getTask = async (id, boardId) => tasksRepo.getTask(id, boardId);

const updateTask = async (taskId, boardId, taskData) => tasksRepo
  .updateTask(taskId, boardId, taskData);

const deleteTask = async (taskId, boardId) => tasksRepo.deleteTask(taskId, boardId);

module.exports = {
  getTasksByBoard, createTask, getTask, updateTask, deleteTask,
};
