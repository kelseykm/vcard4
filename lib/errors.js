class MissingArgument extends Error {
  constructor(message) {
    super(message);
    this.name = 'MissingArgument';
  }
}

class InvalidArgument extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidArgument';
  }
}

export {
  MissingArgument,
  InvalidArgument,
};
