const BOARDS = [];

const getBoards = async () => BOARDS;

const createBoard = async (board) => {
  BOARDS.push(board);
  return board;
};

const getBoard = async (id) => BOARDS.find((board) => board.id === id);

const updateBoard = async (board) => {
  const index = BOARDS.indexOf(board);
  BOARDS[index] = board;
  return board;
};

const deleteBoard = async (id) => {
  const board = await getBoard(id);
  const index = BOARDS.indexOf(board);
  BOARDS.splice(index, 1);
};

module.exports = {
  getBoards, createBoard, getBoard, updateBoard, deleteBoard,
};
