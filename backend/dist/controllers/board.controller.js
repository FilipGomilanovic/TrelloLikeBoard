"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const user_1 = __importDefault(require("../models/user"));
const task_1 = __importDefault(require("../models/task"));
class BoardController {
    constructor() {
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.getUser = (req, res) => {
            user_1.default.findById({ _id: req.body.id }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.deleteTask = (req, res) => {
            task_1.default.findByIdAndRemove({ _id: req.body.id }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.editTask = (req, res) => {
            task_1.default.findOneAndUpdate({ task_id: req.body.task_id }, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    username: req.body.username,
                    status: req.body.status
                }
            }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.getAllTasks = (req, res) => {
            task_1.default.find({}, (err, tasks) => {
                if (err)
                    console.log(err);
                else
                    res.json(tasks);
            });
        };
        this.addNewTask = (req, res) => {
            let task = new task_1.default({
                task_id: req.body.id,
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                username: req.body.user,
            });
            task.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.BoardController = BoardController;
//# sourceMappingURL=board.controller.js.map