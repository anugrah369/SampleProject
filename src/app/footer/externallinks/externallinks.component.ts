import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.component.html',
  styleUrls: ['./externallinks.component.css']
})
export class ExternallinksComponent implements OnInit {
  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

}
