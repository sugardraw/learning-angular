import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
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
    department: null,
    isActive: null,
    photoPath: null,
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Pyroll' },
    { id: 5, name: 'Admin' }
  ];
  constructor() {
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
  saveEmployee(ngForm: NgForm): void {
    console.log(ngForm.value);
  }
  onBlur(control, controlStyle) {

      if ( control.valid ) {
        console.log(control, controlStyle);
      }
  }
}
