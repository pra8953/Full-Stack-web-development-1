import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task = '';
  taskList: { id: number; task: string }[] = [];
  
  addTask() {
    const val = this.task.trim();
    if (val) {
      this.taskList.push({ id: this.taskList.length + 1, task: val });
      this.task = '';
    }
  }
  
  del(id: number) {
    this.taskList = this.taskList.filter(item => item.id !== id);
  }
  
  trackById(index: number, item: { id: number }) {
    return item.id;
  }
  
}
