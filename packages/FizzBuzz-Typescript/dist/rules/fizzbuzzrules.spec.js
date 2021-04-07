"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzzrule_1 = require("./fizzbuzzrule");
describe("FizzBuzz number", function () {
    it("should return false with number 1", function () {
        var fizzBuzzRule = new fizzbuzzrule_1.FizzBuzzRule();
        var output = fizzBuzzRule.matches(1);
        expect(output).toBe(false);
    });
    it("should return true with number 15", function () {
        var fizzBuzzRule = new fizzbuzzrule_1.FizzBuzzRule();
        var output = fizzBuzzRule.matches(15);
        expect(output).toBe(true);
    });
    it("should return FizzBuzz", function () {
        var fizzBuzzRule = new fizzbuzzrule_1.FizzBuzzRule();
        var output = fizzBuzzRule.getReplacement();
        expect(output).toBe("FizzBuzz");
    });
});
//# sourceMappingURL=fizzbuzzrules.spec.js.map