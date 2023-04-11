import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:4000/board/getAllUsers');
  }

  getUser(id) {
    const data = {
      id: id
    }
    return this.http.post('http://localhost:4000/board/getUser', data);
  }

  deleteTask(id) {
    const data = {
      id: id
    }
    return this.http.post('http://localhost:4000/board/deleteTask', data);
  }

  editTask(id, title, description, username, status) {
    const data = {
      task_id: id,
      title: title,
      description: description,
      username: username,
      status: status
    }
    return this.http.post('http://localhost:4000/board/editTask', data);
  }

  addNewTask(id, title, description, status, user) {
    alert("usao ovde")
    const data = {
      id: id,
      title: title,
      description: description,
      status: status,
      user: user
    }
    return this.http.post('http://localhost:4000/board/addNewTask', data);
  }

  getAllTasks() {
    return this.http.get('http://localhost:4000/board/getAllTasks');
  }



}
