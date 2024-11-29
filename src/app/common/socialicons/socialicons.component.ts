import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialicons',
  templateUrl: './socialicons.component.html',
  styleUrls: ['./socialicons.component.css']
})
export class SocialiconsComponent implements OnInit {
  @Input() icon: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
