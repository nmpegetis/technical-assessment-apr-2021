"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buzzrule_1 = require("./buzzrule");
describe("Buzz number", function () {
    it("should return false with number 1", function () {
        var buzzRule = new buzzrule_1.BuzzRule();
        var output = buzzRule.matches(1);
        expect(output).toBe(false);
    });
    it("should return true with number 5", function () {
        var buzzRule = new buzzrule_1.BuzzRule();
        var output = buzzRule.matches(5);
        expect(output).toBe(true);
    });
    it("should return Buzz", function () {
        var buzzRule = new buzzrule_1.BuzzRule();
        var output = buzzRule.getReplacement();
        expect(output).toBe("Buzz");
    });
});
//# sourceMappingURL=buzzrule.spec.js.map