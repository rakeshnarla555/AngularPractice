import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = [
    {
      Id: '1',
      Name: 'Rakesh',
      Subject: 'Maths',
      Marks: '97',
    },
    {
      Id: '2',
      Name: 'Krishna',
      Subject: 'Science',
      Marks: '91',
    },
    {
      Id: '3',
      Name: 'Ashok',
      Subject: 'English',
      Marks: '95',
    },
    {
      Id: '4',
      Name: 'Priya',
      Subject: 'Hindi',
      Marks: '99',
    },
  ];
}
