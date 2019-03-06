"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerChangeEvent = /** @class */ (function () {
    function ControllerChangeEvent(_a) {
        var channel = _a.channel, controllerNumber = _a.controllerNumber, controllerValue = _a.controllerValue;
        this.type = 8 /* ControllerChange */;
        this.channel = channel;
        this.controllerNumber = controllerNumber;
        this.controllerValue = controllerValue;
    }
    return ControllerChangeEvent;
}());
exports.ControllerChangeEvent = ControllerChangeEvent;
//# sourceMappingURL=ControllerChange.js.map