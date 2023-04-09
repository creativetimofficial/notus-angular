import { Component, OnInit } from '@angular/core';

declare var $: any; // Import thư viện jQuery
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Khởi tạo DataTable
    $(document).ready(function() {
      $('#myTable').DataTable({
        language: {
          paginate: {
            previous: 'Trước', 
            next: 'Tiếp', 
          },
          search: "Tìm kiếm: ",
        }
      });
    });
  }

}
