"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const board_controller_1 = require("../controllers/board.controller");
const boardRouter = express_1.default.Router();
boardRouter.route('/getAllUsers').get((req, res) => new board_controller_1.BoardController().getAllUsers(req, res));
boardRouter.route('/getAllTasks').get((req, res) => new board_controller_1.BoardController().getAllTasks(req, res));
boardRouter.route('/getUser').post((req, res) => new board_controller_1.BoardController().getUser(req, res));
boardRouter.route('/deleteTask').post((req, res) => new board_controller_1.BoardController().deleteTask(req, res));
boardRouter.route('/editTask').post((req, res) => new board_controller_1.BoardController().editTask(req, res));
boardRouter.route('/addNewTask').post((req, res) => new board_controller_1.BoardController().addNewTask(req, res));
exports.default = boardRouter;
//# sourceMappingURL=board.routes.js.map