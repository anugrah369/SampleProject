import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-details',
  templateUrl: './count-details.component.html',
  styleUrls: ['./count-details.component.css']
})
export class CountDetailsComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
