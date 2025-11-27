import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = [
    { id: 1, name: 'Anushka', course: 'Angular' },
    { id: 2, name: 'Rohit', course: 'Node.js' },
    { id: 3, name: 'Priya', course: 'Python' }
  ];

  getStudents() {
    return this.students;
  }
}
