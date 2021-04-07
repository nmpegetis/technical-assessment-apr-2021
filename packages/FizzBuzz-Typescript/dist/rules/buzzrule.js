"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuzzRule = void 0;
var BuzzRule = /** @class */ (function () {
    function BuzzRule() {
    }
    BuzzRule.prototype.matches = function (number) {
        return number % 5 === 0;
    };
    BuzzRule.prototype.getReplacement = function () {
        return "Buzz";
    };
    return BuzzRule;
}());
exports.BuzzRule = BuzzRule;
//# sourceMappingURL=buzzrule.js.map