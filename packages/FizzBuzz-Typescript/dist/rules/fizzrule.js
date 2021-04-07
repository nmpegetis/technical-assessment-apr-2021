"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzRule = void 0;
var FizzRule = /** @class */ (function () {
    function FizzRule() {
    }
    FizzRule.prototype.matches = function (number) {
        return number % 3 === 0;
    };
    FizzRule.prototype.getReplacement = function () {
        return "Fizz";
    };
    return FizzRule;
}());
exports.FizzRule = FizzRule;
//# sourceMappingURL=fizzrule.js.map