export class ControllerChangeEvent {
    constructor({ channel, controllerNumber, controllerValue, }) {
        this.type = 8 /* MIDIEventType.ControllerChange */;
        this.channel = channel;
        this.controllerNumber = controllerNumber;
        this.controllerValue = controllerValue;
    }
}
