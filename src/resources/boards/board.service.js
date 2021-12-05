const boardsRepo = require('./board.memory.repository.js');
const tasksService = require('../tasks/task.service.js');
const Board = require('./board.model.js');

const getBoards = async () => boardsRepo.getBoards();

const createBoard = async (boardData) => {
  const createdBoard = new Board({ ...boardData });
  return boardsRepo.createBoard(createdBoard);
};

const getBoard = async (id) => boardsRepo.getBoard(id);

const updateBoard = async (id, board) => boardsRepo.updateBoard(id, board);

const deleteBoard = async (id) => {
  await tasksService.deleteTaskByBoard(id);
  return boardsRepo.deleteBoard(id);
};

module.exports = {
  getBoards, createBoard, getBoard, updateBoard, deleteBoard,
};
