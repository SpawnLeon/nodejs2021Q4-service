const boardsRepo = require('./board.memory.repository.js');
const Board = require('./board.model.js');

const getBoards = async () => boardsRepo.getBoards();

const createBoard = async (boardData) => {
  const createdBoard = new Board({ ...boardData });
  return boardsRepo.createBoard(createdBoard);
};

const getBoard = async (id) => boardsRepo.getBoard(id);

const updateBoard = async (id, userData) => {
  const user = await boardsRepo.getBoard(id);
  if (!user) {
    return null;
  }
  const updatedBoard = { ...user, ...userData };
  return boardsRepo.updateBoard(updatedBoard);
};

const deleteBoard = async (id) => boardsRepo.deleteBoard(id);

module.exports = {
  getBoards, createBoard, getBoard, updateBoard, deleteBoard,
};
