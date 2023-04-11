import { Component, OnInit } from '@angular/core'
import { BoardService } from '../board.service'
import { HttpClient } from '@angular/common/http'
import { User } from 'models/user'
import { Task } from 'models/task'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService, private http: HttpClient) { }

  ngOnInit(): void {
    this.boardService.getAllUsers().subscribe((users: User[]) => {
      this.allUsers = users;

    })
    this.getAllTasks();
  }
  toDoTasks = []
  inProgressTasks = []
  doneTasks = []
  allUsers = []
  user = 'unassigned'
  status = 'to-do'
  filterUser = 'unassigned'
  filterStatus = 'to-do'
  filterTitle = ''
  newTask = false
  newTaskNumber = 1;
  title = '';
  description = '';
  editUser = ''
  editDescription = ''
  editTitle = ''
  changeStatusFlag = false;
  editStatus = '';

  setNewTask() {
    this.newTask = !this.newTask
  }

  filterTasks() {

    this.toDoTasks = []
    this.inProgressTasks = []
    this.doneTasks = []

    this.boardService.getAllTasks().subscribe((tasks: Task[]) => {
      tasks.forEach(task => {
        if (task.status == "to-do") {
          this.toDoTasks.push(task);
        } else if (task.status == "in_progress") {
          this.inProgressTasks.push(task);
        }
        else {
          this.doneTasks.push(task);
        }
      })

      if (this.filterStatus != "all") {
        if (this.filterStatus == "to-do") {
          this.inProgressTasks = []
          this.doneTasks = []
        } else if (this.filterStatus == "in_progress") {
          this.toDoTasks = [];
          this.doneTasks = [];
        } else {
          this.toDoTasks = [];
          this.inProgressTasks = [];
        }
      }
      if (this.filterUser != "all") {
        this.toDoTasks = this.toDoTasks.filter(task =>
          task.username == this.filterUser //&& (task.title.includes(this.filterTitle))
        )
        this.inProgressTasks = this.inProgressTasks.filter(task =>
          task.username == this.filterUser //&& (task.title.includes(this.filterTitle))
        )
        this.doneTasks = this.doneTasks.filter(task =>
          task.username == this.filterUser //&& (task.title.includes(this.filterTitle))
        )
      }
      alert(this.filterTitle)
      this.toDoTasks = this.toDoTasks.filter(task => task.title.includes(this.filterTitle))
      this.inProgressTasks = this.inProgressTasks.filter(task => task.title.includes(this.filterTitle))
      this.doneTasks = this.doneTasks.filter(task => task.title.includes(this.filterTitle))
    })
  }

  getAllTasks() {

    this.toDoTasks = []
    this.inProgressTasks = []
    this.doneTasks = []

    this.boardService.getAllTasks().subscribe((tasks: Task[]) => {
      tasks.forEach(task => {
        if (task.status == "to-do") {
          this.toDoTasks.push(task);
        } else if (task.status == "in_progress") {
          this.inProgressTasks.push(task);
        }
        else {
          this.doneTasks.push(task);
        }
      })
      this.newTaskNumber = this.getNextTaskId();
    })

  }

  saveStatus(t: Task) {
    if (this.editStatus != t.status) {
      this.boardService.editTask(t.task_id, t.title, t.description, t.username, this.editStatus).subscribe(() => {
        this.setChangeStatus(t);
        this.getAllTasks();
      })
    }
  }

  deleteTask(id) {
    this.boardService.deleteTask(id).subscribe(() => {
      this.getAllTasks();
    })
  }

  getNextTaskId() {
    let maxId = 0;
    this.toDoTasks.forEach(task => {
      if (task.task_id > maxId) {
        maxId = task.task_id;
      }
    })
    this.inProgressTasks.forEach(task => {
      if (task.task_id > maxId) {
        maxId = task.task_id;
      }
    })
    this.doneTasks.forEach(task => {
      if (task.task_id > maxId) {

        maxId = task.task_id;
      }
    })
    return maxId + 1;
  }

  saveEdit(t: Task) {
    if (!this.editDescription) {
      this.editDescription = t.description
    }
    if (!this.editTitle) {
      this.editTitle = t.title
    }
    if (!this.editUser) {
      this.editUser = t.username
    }

    this.boardService.editTask(t.task_id, this.editTitle, this.editDescription, this.editUser, t.status).subscribe(respObj => {
      this.getAllTasks();
    })
  }

  setEdit(t: Task) {
    t.edit = !t.edit
  }

  setChangeStatus(t: Task) {
    t.changeStatus = !t.changeStatus
  }

  addNewTask() {
    if (this.title != '' && this.description != '') {
      this.setNewTask();
      this.boardService.addNewTask(this.newTaskNumber, this.title, this.description, this.status, this.user).subscribe(respObj => {
        this.getAllTasks();
      })
    }
  }
}
