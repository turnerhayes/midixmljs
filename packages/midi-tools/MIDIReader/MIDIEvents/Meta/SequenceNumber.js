"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceNumberEvent = /** @class */ (function () {
    function SequenceNumberEvent(_a) {
        var sequenceNumber = _a.sequenceNumber;
        this.type = 256 /* MetaSequenceNumber */;
        this.sequenceNumber = sequenceNumber;
    }
    return SequenceNumberEvent;
}());
exports.SequenceNumberEvent = SequenceNumberEvent;
