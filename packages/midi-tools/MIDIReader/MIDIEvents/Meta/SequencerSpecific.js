"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequencerSpecificEvent = /** @class */ (function () {
    function SequencerSpecificEvent(_a) {
        var id = _a.id, data = _a.data;
        this.type = 2097152 /* MetaSequencerSpecific */;
        this.id = id;
        this.data = data;
    }
    return SequencerSpecificEvent;
}());
exports.SequencerSpecificEvent = SequencerSpecificEvent;
