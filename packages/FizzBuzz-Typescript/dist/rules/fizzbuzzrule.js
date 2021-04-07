"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzRule = void 0;
var FizzBuzzRule = /** @class */ (function () {
    function FizzBuzzRule() {
    }
    FizzBuzzRule.prototype.matches = function (number) {
        return number % 3 === 0 && number % 5 === 0;
    };
    FizzBuzzRule.prototype.getReplacement = function () {
        return "FizzBuzz";
    };
    return FizzBuzzRule;
}());
exports.FizzBuzzRule = FizzBuzzRule;
//# sourceMappingURL=fizzbuzzrule.js.map