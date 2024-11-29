import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  classweb = 'text-center';
  classmob = 'class-left';

  imageurlweb = 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/logo_footer_2.png';
  imageurlmob = 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/logo_dark.png';

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
//menu items list
  menuList = [{
    name: 'Home',
    link: 'http://themes.roninwp.com/cronus/',
    items: [{name: 'home 1', link: '#', subItems: []},
            {name: 'home 2', link: '#', subItems: []},
            {name: 'home 3', link: '#', subItems: []},
            {name: 'home 4', link: '#', subItems: []},
            {name: 'home 5', link: '#', subItems: []}]
  },
  {
    name: 'Services',
    link: '#',
    items: [{name: 'Services 1', link: '#', subItems: []},
            {name: 'Services 2', link: '#', subItems: []},
            {name: 'Services 3', link: '#', subItems: []},
            {name: 'Services 4', link: '#', subItems: []},
            {name: 'Services 5', link: '#', subItems: []}]
  },
  {
    name: 'Projects',
    link: '#',
    items: [{name: 'Grid layout', link: '#', subItems: [{name: 'grid 1', link: '#'},{name: 'grid 2', link: '#'},{name: 'grid 3', link: '#'}]},
            {name: 'metro layout', link: '#', subItems: [{name: 'metro ', link: '#'},{name: 'metro 2', link: '#'},{name: 'metro 3', link: '#'}]},
            {name: 'masonry layout', link: '#', subItems: []},
            {name: 'single layout', link: '#', subItems: [{name: 'single ', link: '#'},{name: 'single 2', link: '#'},{name: 'single 3', link: '#'}]}]
  },
  {
    name: 'Blog',
    link: '#',
    items: [{name: 'Blog 1', link: '#', subItems: []},
            {name: 'Blog 2', link: '#', subItems: []},
            {name: 'Blog 3', link: '#', subItems: []},
            {name: 'Blog 4', link: '#', subItems: []},
            {name: 'Blog 5', link: '#', subItems: [{name: 'single ', link: '#'},{name: 'single 2', link: '#'},{name: 'single 3', link: '#'}]}]
  },
  {
    name: 'Our team',
    link: '#',
    items: [{name: 'Our team 1', link: '#', subItems: []},
            {name: 'Our team 2', link: '#', subItems: []},
            {name: 'Our team 3', link: '#', subItems: []},
            {name: 'Our team 4', link: '#', subItems: []},
            {name: 'Our team 5', link: '#', subItems: []}]
  },
  {
    name: 'About',
    link: '#',
    items: [{name: 'About 1', link: '#', subItems: []},
            {name: 'About 2', link: '#', subItems: []},
            {name: 'About 5', link: '#', subItems: []}]
  },
  {
    name: 'Contact',
    link: '#',
    items: [{name: 'Contact 1', link: '#', subItems: []},
            {name: 'Contact 2', link: '#', subItems: []},
            {name: 'Contact 5', link: '#', subItems: []}]
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
