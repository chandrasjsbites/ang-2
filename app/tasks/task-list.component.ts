import {Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'


import {EventService} from './shared/event.service'

@Component({
    template: `<h1> ANgular 2 upcoming tasks</h1>
                 <div class="row">
                  <div class="col-md-5" *ngFor="let task of tasks">
                      <task-thumbnail (eventClick)="handleEventClick($event)" [task]="task"></task-thumbnail>
                      
                  </div>
                  </div>`
})

export class TaskListComponent implements OnInit {
    
    tasks: any
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.tasks = this.route.snapshot.data['tasks']
    }
    handleEventClick(data) {
        console.log('receieved', data)
    }
}