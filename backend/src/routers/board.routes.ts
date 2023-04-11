import express from 'express';
import { BoardController } from '../controllers/board.controller';

const boardRouter = express.Router();


boardRouter.route('/getAllUsers').get(
    (req, res) => new BoardController().getAllUsers(req, res)
)

boardRouter.route('/getAllTasks').get(
    (req, res) => new BoardController().getAllTasks(req, res)
)

boardRouter.route('/getUser').post(
    (req, res) => new BoardController().getUser(req, res)
)

boardRouter.route('/deleteTask').post(
    (req, res) => new BoardController().deleteTask(req, res)
)

boardRouter.route('/editTask').post(
    (req, res) => new BoardController().editTask(req, res)
)

boardRouter.route('/addNewTask').post(
    (req, res) => new BoardController().addNewTask(req, res)
)

export default boardRouter;