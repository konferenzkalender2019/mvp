import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  events = [
    {name: 'GOTO BERLIN 2019',
     url: 'https://lorempixel.com/400/200/business/5',
    homePageUrl: 'https://gotober.com',
    startDatum: new Date('2019, 10, 23'),
    endDatum: new Date('2019, 10, 25')},
    {name: 'BED CON 2019',
     url: 'https://lorempixel.com/400/200/business/1',
     homePageUrl: 'http://bed-con.org',
     startDatum: new Date('2019, 09, 05'),
     endDatum: new Date('2019, 09, 06')},
    
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
