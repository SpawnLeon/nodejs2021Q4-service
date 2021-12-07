const BOARDS = [];

const getBoards = async () => BOARDS;

const createBoard = async (board) => {
  BOARDS.push(board);
  return board;
};

const getBoard = async (id) => BOARDS.find((board) => board.id === id);

const updateBoard = async (id, boardData) => {
  const board = await getBoard(id);

  if (!board) {
    return null;
  }

  const updatedBoard = { ...board, ...boardData };
  const idx = BOARDS.findIndex((b) => b.id === id);
  BOARDS[idx] = updatedBoard;

  return updatedBoard;
};

const deleteBoard = async (id) => {
  const board = await getBoard(id);
  const index = BOARDS.indexOf(board);
  BOARDS.splice(index, 1);
};

module.exports = {
  getBoards, createBoard, getBoard, updateBoard, deleteBoard,
};
