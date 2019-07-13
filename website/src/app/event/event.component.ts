import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

      private todayDate:Date

  @Input() event;

  constructor() { }

  ngOnInit() {

    this.todayDate = new Date();
    this.todayDate.setHours(0, 0, 0, 0);

  }

}
