const crypto = require('crypto');

class Board {
  constructor({
    id = crypto.randomUUID(),
    title = '',
    column = [],

  } = {}) {
    this.id = id;
    this.title = title;
    this.column = column;
  }

  static toResponse(board) {
    const { id, title, column } = board;
    return { id, title, column };
  }
}

module.exports = Board;
