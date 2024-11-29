import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressBarData = [{
    title: 'Marketing Online',
    percentage : '75'
  },
  {
    title: 'Deliver Business',
    percentage : '68'
  },
  {
    title: 'Feild Manager',
    percentage : '85'
  },
  {
    title: 'Marketing Online',
    percentage : '80'
  }];

  serviceList = [{
    icon : 'cronus-icon-dash',
    title : 'Financial Analysis',
    discription : 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    icon : 'cronus-icon-chart-dot',
    title : 'Investment Planning',
    discription : 'Neque porro quisquam est, dolorem ipsum quia dolor sit amet quia'
  },
  {
    icon : 'cronus-icon-rocket',
    title : 'Online Consulting',
    discription : 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }]

  countAndDetails = [{
    count : '2300',
    title : 'Powerful options',
    description : 'Magni dolores eos qui ratione'
  },
  {
    count : '1270',
    title : 'Satisfied Clients',
    description : '1270'
  },
  {
    count : '1270',
    title : 'Best projects',
    description : 'Hendrerit ac nisi Lorem ipsum dolor'
  },
  {
    count : '143',
    title : 'Team members',
    description : 'Nam ac elit a ante commodo tristique'
  }];

}
