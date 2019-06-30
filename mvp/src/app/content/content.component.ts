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
    startDatum: ' 23.10.2019 ',
    endDatum: '- 25.10.2019 '},
    {name: 'BED CON 2019',
     url: 'https://lorempixel.com/400/200/business/6',
     homePageUrl: 'http://bed-con.org',
     startDatum: '05.09.2019',
     endDatum: '06.09.2019'},
    
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
