const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service.js');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getBoards();
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = req.body;
  const createdBoard = await boardsService.createBoard(board);
  res.status(201).json(Board.toResponse(createdBoard));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoard(id);
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = req.body;
  const updatedBoard = await boardsService.updateBoard(id, board);

  if (!updatedBoard) {
    res.status(404).json({ message: 'Board not found' });
  }

  res.json(Board.toResponse(updatedBoard));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await boardsService.deleteBoard(id);
  res.status(201);
  res.json({});
});

module.exports = router;
