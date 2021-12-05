const router = require('express').Router();
const tasksService = require('./task.service.js');

router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getTasksByBoard(boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/').post(async (req, res) => {
  const task = req.body;
  const { boardId } = req.params;
  const createdTask = await tasksService.createTask(boardId, task);
  res.status(201).json(createdTask);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const { taskId, boardId } = req.params;
  const task = await tasksService.getTask(taskId, boardId);
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const task = req.body;
  const updatedTask = await tasksService.updateTask(taskId, boardId, task);

  if (!updatedTask) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }

  res.json(updatedTask);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const { taskId, boardId } = req.params;
  await tasksService.deleteTask(taskId, boardId);
  res.status(204);
  res.json({});
});

module.exports = router;
