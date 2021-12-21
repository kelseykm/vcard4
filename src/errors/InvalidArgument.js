export class InvalidArgument extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidArgument';
  }
}
