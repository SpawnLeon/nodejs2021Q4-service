const crypto = require('crypto');

class Board {
  constructor({
    id = crypto.randomUUID(),
    title = '',
    columns = [],

  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
