import { InvalidArgument } from "../../src/errors/index.js";
import { expect } from "chai";

describe("InvalidArgument tests", () => {
  it("Should work expected", () => {
    expect(() => {
      throw new InvalidArgument("Testing...");
    }).to.throw(InvalidArgument, "Testing...");
  });
});
