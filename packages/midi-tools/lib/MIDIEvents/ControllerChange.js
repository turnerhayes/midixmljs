"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerChangeEvent = void 0;
class ControllerChangeEvent {
    constructor({ channel, controllerNumber, controllerValue, }) {
        this.type = 8 /* MIDIEventType.ControllerChange */;
        this.channel = channel;
        this.controllerNumber = controllerNumber;
        this.controllerValue = controllerValue;
    }
}
exports.ControllerChangeEvent = ControllerChangeEvent;
