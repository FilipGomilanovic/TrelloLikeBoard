"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Task = new Schema({
    task_id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    username: {
        type: String
    },
});
exports.default = mongoose_1.default.model('Task', Task, 'tasks');
//# sourceMappingURL=task.js.map