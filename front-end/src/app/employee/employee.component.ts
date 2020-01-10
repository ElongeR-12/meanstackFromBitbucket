import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
declare var M: any;//to show a toast notification (https://materializecss.com/toasts.html)

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]// in order to inject employeeService
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

//ngOnInit lifecycle hook will be invoked whenever this component is fully loaded
  ngOnInit() {
    this.resetForm();
    // this.refreshEmployeeList();
  }

  //form preset operation
  resetForm(form?: NgForm) {
    if (form)//check if we have value for this form parameter
      form.reset();//if value passed we can reset form value by clicking reset button in client side, here we call reset()
    this.employeeService.selectedEmployee = {// reset manually these form controls using selected employee property from employee service class
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }// now this function can be called inside ngoninit lifecycle hook
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {//insert new employee into mongoDB
        this.resetForm(form);
        // this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    // else {
    //   this.employeeService.putEmployee(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshEmployeeList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }

    // refreshEmployeeList() {
    //   this.employeeService.getEmployeeList().subscribe((res) => {
    //     this.employeeService.employees = res as Employee[];
    //   });
    // }
  }
}
