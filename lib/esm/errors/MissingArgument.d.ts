declare class MissingArgument extends Error {
  readonly name: string;
  constructor(message: string);
}

export { MissingArgument };
