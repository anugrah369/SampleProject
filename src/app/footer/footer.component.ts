import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  class = 'text-center';
  imageurl = 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/logo_footer_2.png';

    //social icon list
    iconList = [{
      name: 'facebook',
      class: 'fa fa-facebook',
      href: '#'
    },
    {
      name: 'twitter',
      class: 'fa fa-twitter',
      href: '#'
    },
    {
      name: 'google-plus',
      class: 'fa fa-google-plus',
      href: '#'
    },
    {
      name: 'instagram',
      class: 'fa fa-instagram',
      href: '#'
    }]

    contactList =[{
      name: 'BUSINESS ADDRESS',
      description : 'London Oxford Street, 012 United Kingdom.'
    },
    {
      name: 'BUSINESS PHONE',
      description : '+032 3456 7890'
    },
    {
      name: 'BUSINESS EMAIL',
      description : 'Business@moontheme.net'
    }]

    openingHours = [{
      name: 'MON - FRI',
      description : '8.00 AM - 05:00 PM'
    },
    {
      name: 'SAT',
      description : '10.00 AM - 05.00 PM'
    },
    {
      name: 'SUN',
      description : '2.00 PM - 05.00 PM'
    }]

    externalLinks = [{
      name: 'About Us',
      link : '#'
    },
    {
      name: 'Our Services',
      link : '#'
    },
    {
      name: 'Pricing Table',
      link : '#'
    },
    {
      name: 'Projects',
      link : '#'
    },
    {
      name: 'Our Team',
      link : '#'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
