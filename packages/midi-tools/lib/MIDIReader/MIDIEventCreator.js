"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFromBytes = void 0;
const Events = __importStar(require("../MIDIEvents"));
const MIDIMetaEventCreator_1 = require("./MIDIMetaEventCreator");
const variable_length_value_1 = require("../utils/variable-length-value");
const createNoteOffEventFromBytes = (statusByte, dataView, startIndex = 0) => {
    const channel = (statusByte & 0xF) + 1;
    const noteNumber = dataView.getUint8(startIndex);
    const release = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOffEvent({
            channel,
            noteNumber,
            release,
        })
    ];
};
const createNoteOnEventFromBytes = (statusByte, dataView, startIndex = 0) => {
    const channel = (statusByte & 0xF) + 1;
    const noteNumber = dataView.getUint8(startIndex);
    const velocity = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOnEvent({
            channel,
            noteNumber,
            velocity,
        })
    ];
};
const createSysexEventFromBytes = (statusByte, dataView, startIndex = 0) => {
    const [bytesRead, dataLength] = (0, variable_length_value_1.fromVariableLengthValue)(dataView.buffer, dataView.byteOffset + startIndex);
    return [
        bytesRead + dataLength,
        new Events.SysExEvent({
            eventData: new Uint8Array(dataView.buffer, dataView.byteOffset + startIndex, dataLength),
        })
    ];
};
const createProgramChangeEventFromBytes = (statusByte, dataView, startIndex = 0) => {
    const channel = (statusByte & 0xF) + 1;
    const programNumber = dataView.getUint8(startIndex);
    return [
        1,
        new Events.ProgramChangeEvent({
            channel,
            programNumber,
        })
    ];
};
const createControllerChangeEventFromBytes = (statusByte, dataView, startIndex = 0) => {
    const channel = (statusByte & 0xF) + 1;
    const controllerNumber = dataView.getUint8(startIndex);
    const controllerValue = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.ControllerChangeEvent({
            channel,
            controllerNumber,
            controllerValue,
        })
    ];
};
const createPolyphonicAftertouchEventFromBytes = (statusByte, dataView, startIndex) => {
    const channel = (statusByte & 0xF) + 1;
    const noteNumber = dataView.getUint8(startIndex);
    const pressure = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.PolyphonicAftertouchEvent({
            channel,
            noteNumber,
            pressure,
        })
    ];
};
const createChannelAftertouchEventFromBytes = (statusByte, dataView, startIndex) => {
    const channel = (statusByte & 0xF) + 1;
    const pressure = dataView.getUint8(startIndex + 1);
    return [
        1,
        new Events.ChannelAftertouchEvent({
            channel,
            pressure,
        })
    ];
};
const createPitchBendEventFromBytes = (statusByte, dataView, startIndex) => {
    const channel = (statusByte & 0xF) + 1;
    const leastSignificantByte = dataView.getUint8(startIndex);
    const mostSignificantByte = dataView.getUint8(startIndex + 1);
    const value = ((mostSignificantByte & 0x7F) << 7) + (leastSignificantByte & 0x7F);
    return [
        2,
        new Events.PitchBendEvent({
            channel,
            value,
        })
    ];
};
const getCreateFunction = (statusByte) => {
    if (statusByte >> 4 === 0x8) {
        return createNoteOffEventFromBytes;
    }
    if (statusByte >> 4 === 0x9) {
        return createNoteOnEventFromBytes;
    }
    if (statusByte >> 4 === 0xA) {
        return createPolyphonicAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xB) {
        return createControllerChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xC) {
        return createProgramChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xD) {
        return createChannelAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xE) {
        return createPitchBendEventFromBytes;
    }
    if (statusByte === 0xF0) {
        return createSysexEventFromBytes;
    }
    if (statusByte === 0xFF) {
        return MIDIMetaEventCreator_1.createMetaEventFromBytes;
    }
    return null;
};
const eventFromBytes = (dataView, startIndex = 0, previousStatusByte = null) => {
    let statusByte = dataView.getUint8(startIndex);
    let createFunction = getCreateFunction(statusByte);
    let bytesRead = 0;
    if (createFunction === null && previousStatusByte !== null) {
        statusByte = previousStatusByte;
        createFunction = getCreateFunction(statusByte);
    }
    else {
        // The byte at startIndex was the status byte, so skip it in the data
        startIndex += 1;
        bytesRead += 1;
    }
    if (createFunction !== null) {
        const [eventBytesRead, event] = createFunction(statusByte, dataView, startIndex);
        bytesRead += eventBytesRead;
        return {
            bytesRead,
            event,
            statusByte,
        };
    }
    return null;
};
exports.eventFromBytes = eventFromBytes;
