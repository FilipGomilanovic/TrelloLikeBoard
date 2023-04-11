import express from 'express'
import User from '../models/user'
import Task from '../models/task'

export class BoardController {

    getAllUsers = (req: express.Request, res: express.Response) => {
        User.find({}, (err, users) => {
            if (err) console.log(err);
            else res.json(users)
        })

    }

    getUser = (req: express.Request, res: express.Response) => {
        User.findById({ _id: req.body.id }, (err, user) => {
            if (err) console.log(err);
            else res.json(user)
        })

    }

    deleteTask = (req: express.Request, res: express.Response) => {
        Task.findByIdAndRemove({ _id: req.body.id }, (err) => {
            if (err) console.log(err);
            else res.json({ 'message': 'ok' })
        })
    }

    editTask = (req: express.Request, res: express.Response) => {
        Task.findOneAndUpdate({ task_id: req.body.task_id },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    username: req.body.username,
                    status: req.body.status
                }
            }, (err) => {
                if (err) console.log(err);
                else res.json({ 'message': 'ok' })
            })
    }

    getAllTasks = (req: express.Request, res: express.Response) => {
        Task.find({}, (err, tasks) => {
            if (err) console.log(err);
            else res.json(tasks)
        })

    }

    addNewTask = (req: express.Request, res: express.Response) => {
        let task = new Task({
            task_id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            username: req.body.user,
        })
        task.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" })
            }
            else res.json({ "message": "ok" })
        })
    }

}