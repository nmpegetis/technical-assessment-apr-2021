import { BuzzRule } from "./buzzrule";

describe("Buzz number", () => {
  it("should return false with number 1", () => {
    const buzzRule = new BuzzRule();
    const output = buzzRule.matches(1);
    expect(output).toBe(false);
  });

  it("should return true with number 5", () => {
    const buzzRule = new BuzzRule();
    const output = buzzRule.matches(5);
    expect(output).toBe(true);
  });

  it("should return Buzz", () => {
    const buzzRule = new BuzzRule();
    const output = buzzRule.getReplacement();
    expect(output).toBe("Buzz");
  });

});