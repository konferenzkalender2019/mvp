import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  events = [
    {name: 'Veranstaltung 1',
     url: 'https://lorempixel.com/400/200/business/5'},
    {name: 'Veranstaltung 2',
     url: 'https://lorempixel.com/400/200/business/6'},
    {name: 'Veranstaltung 3', 
     url: 'https://lorempixel.com/400/200/business/8'}
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
