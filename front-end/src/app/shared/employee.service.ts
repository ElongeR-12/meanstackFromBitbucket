import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Employee} from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;//type employee model class, in it we will design a form insert and update operation
  employees: Employee[];// array of employee as employees where we save all employees from the mongodb collection
  readonly baseURL = 'http://localhost:3000/employees';//base URL variable it initialize the URI for employee controller in our node.js project

  constructor(private http: HttpClient) { }

//to consume router post from employeeControler of nodeJs
  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);//post request into the node.js project
  }
}
