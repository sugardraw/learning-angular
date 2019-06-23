import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Marc',
      gender: 'Male',
      email: 'Email',
      phoneNumber: 3278947,
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/11/1979'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/profile_01.jpg'
    },
    {
      id: 2,
      name: 'luis',
      gender: 'Male',
      email: 'Email',
      phoneNumber: 30001,
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/11/1988'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/profile_02.jpg'
    },
    {
      id: 3,
      name: 'Norberta',
      gender: 'Female',
      email: 'Email',
      phoneNumber: 2883401,
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/8/1967'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/profile_03.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
