import { FizzRule } from "./fizzrule";

describe("Fizz number", () => {
  it("should return false with number 1", () => {
    const fizzRule = new FizzRule();
    const output = fizzRule.matches(1);
    expect(output).toBe(false);
  });

  it("should return true with number 3", () => {
    const fizzRule = new FizzRule();
    const output = fizzRule.matches(3);
    expect(output).toBe(true);
  });

  it("should return Fizz", () => {
    const fizzRule = new FizzRule();
    const output = fizzRule.getReplacement();
    expect(output).toBe("Fizz");
  });

});