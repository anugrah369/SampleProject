import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footeritems',
  templateUrl: './footeritems.component.html',
  styleUrls: ['./footeritems.component.css']
})
export class FooteritemsComponent implements OnInit {
  @Input() list: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
