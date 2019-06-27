import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Marc',
      gender: 'Male',
      email: 'Email',
      phoneNumber: 3278947,
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/11/1979'),
      department: '3',
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
      department: '2',
      isActive: false,
      photoPath: 'assets/images/profile_03.jpg'
    },
    {
      id: 3,
      name: 'Norberta',
      gender: 'Female',
      email: 'Email',
      phoneNumber: 2883401,
      contactPreference: 'Phone',
      dateOfBirth: new Date('10/8/1967'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/profile_02.jpg'
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
