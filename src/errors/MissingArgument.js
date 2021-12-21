export class MissingArgument extends Error {
  constructor(message) {
    super(message);
    this.name = 'MissingArgument';
  }
}
