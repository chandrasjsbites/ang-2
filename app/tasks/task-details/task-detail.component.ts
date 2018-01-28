import {Component} from '@angular/core'
import {EventService } from './../shared/event.service'

import {ActivatedRoute } from '@angular/router'

@Component({
    selector: 'task-detail',
    templateUrl:'/app/tasks/task-details/task-detail.component.html',
styles: [
    `
    .container { padding: 20px;   }
    .event-image { height: 100px; }
    `
]
})

export class TaskDetailComponent {
    task: any
    constructor(private eventService: EventService, private route :ActivatedRoute) {

    }

    ngOnInit() {
        this.task = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

}