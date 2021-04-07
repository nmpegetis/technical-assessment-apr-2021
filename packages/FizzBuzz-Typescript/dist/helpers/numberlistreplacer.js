"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberListReplacer = void 0;
var NumberListReplacer = /** @class */ (function () {
    function NumberListReplacer() {
        this.rules = [];
    }
    NumberListReplacer.prototype.addRule = function (rule) {
        this.rules.push(rule);
    };
    NumberListReplacer.prototype.generate = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    };
    NumberListReplacer.prototype.getReplacement = function (number) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.matches(number)) {
                return rule.getReplacement();
            }
        }
        return String(number);
    };
    return NumberListReplacer;
}());
exports.NumberListReplacer = NumberListReplacer;
//# sourceMappingURL=numberlistreplacer.js.map