"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MeasureRest_1 = require("./MeasureRest");
var fraction_js_1 = __importDefault(require("fraction.js"));
var MeasureItemListNode = /** @class */ (function () {
    function MeasureItemListNode(_a) {
        var beat = _a.beat, element = _a.element;
        this.nextInBeat = null;
        this.previousInBeat = null;
        this.next = null;
        this.previous = null;
        this.beat = beat;
        this.element = element;
    }
    return MeasureItemListNode;
}());
exports.MeasureItemListNode = MeasureItemListNode;
var MeasureItemList = /** @class */ (function () {
    function MeasureItemList(_a) {
        var timeSignature = _a.timeSignature;
        this.lastAudibleElement = null;
        this.totalQuarterNotes = new fraction_js_1.default(0);
        this.nodes = [];
        this.timeSignature = timeSignature;
    }
    Object.defineProperty(MeasureItemList.prototype, "lengthInQuarterNotes", {
        get: function () {
            return this.totalQuarterNotes.valueOf();
        },
        enumerable: true,
        configurable: true
    });
    MeasureItemList.prototype.add = function (element) {
        var beat = this.totalQuarterNotes.div(4 / this.timeSignature.denominator).floor().valueOf() + 1; // Make beats 1-based
        this.totalQuarterNotes = this.totalQuarterNotes.add(element.noteType.fraction);
        var node = new MeasureItemListNode({
            beat: beat,
            element: element,
        });
        if (this.nodes.length > 0) {
            this.nodes[this.nodes.length - 1].next = node;
            node.previous = this.nodes[this.nodes.length - 1];
            if (!(node.element instanceof MeasureRest_1.MeasureRest)) {
                if (this.lastAudibleElement !== null &&
                    this.lastAudibleElement.beat === node.beat) {
                    node.previousInBeat = this.lastAudibleElement;
                    this.lastAudibleElement.nextInBeat = node;
                }
            }
        }
        if (!(node.element instanceof MeasureRest_1.MeasureRest)) {
            this.lastAudibleElement = node;
        }
        this.nodes.push(node);
        return this;
    };
    MeasureItemList.prototype.get = function (index) {
        return this.nodes[index];
    };
    MeasureItemList.prototype[Symbol.iterator] = function () {
        return this.nodes[Symbol.iterator]();
    };
    return MeasureItemList;
}());
exports.MeasureItemList = MeasureItemList;
//# sourceMappingURL=MeasureItemList.js.map