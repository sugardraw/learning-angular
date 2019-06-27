import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;
  dateOfBirth = '30/01/2018';
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  department = 3;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Pyroll' },
    { id: 5, name: 'Admin' }
  ];
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {
    this.datePickerConfig = Object.assign(
      {},

      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 12, 31),
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {}
  saveEmployee(): void {
    // this.employee.department = this.departments[this.employee.department].name;
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
  onBlur(control, controlStyle) {
    if (control.valid) {
      console.log(control, controlStyle);
    }
  }
}
