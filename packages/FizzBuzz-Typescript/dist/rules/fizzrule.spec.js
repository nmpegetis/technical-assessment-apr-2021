"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzrule_1 = require("./fizzrule");
describe("Fizz number", function () {
    it("should return false with number 1", function () {
        var fizzRule = new fizzrule_1.FizzRule();
        var output = fizzRule.matches(1);
        expect(output).toBe(false);
    });
    it("should return true with number 3", function () {
        var fizzRule = new fizzrule_1.FizzRule();
        var output = fizzRule.matches(3);
        expect(output).toBe(true);
    });
    it("should return Fizz", function () {
        var fizzRule = new fizzrule_1.FizzRule();
        var output = fizzRule.getReplacement();
        expect(output).toBe("Fizz");
    });
});
//# sourceMappingURL=fizzrule.spec.js.map