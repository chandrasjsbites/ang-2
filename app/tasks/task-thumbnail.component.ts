import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'task-thumbnail',
    template: `<div [routerLink]="['\events', task.id]">
                    <div class="well hoverwell thumbnail">
                        <h2>{{task?.name}}</h2>
                        <div>Task Id: {{task?.id}}</div>
                        <div [ngClass]="{'green': task.time == '8:00 am'}">time: {{task?.time}}</div>
                        <div>Date: {{task?.date}}</div>
                        <div [hidden]="!task?.location">Location : 
                            <span>{{task.location.address}}, {{task.location.city}}, {{task.location.country}}</span>
                        </div>
                    </div>
                </div>`,
    styles: [`
    .green { color: #00ff00 }
    .bold { font-weight: bold }
    .well.hoverwell.thumbnail { min-height: 220px}
    `]
})

export class TaskThumbnailComponent {
    @Input() task: any
    @Output() eventClick =  new EventEmitter()

    handleClickme() {
        this.eventClick.emit(this.task.taskName)
    }

    getStartTimeStyle():any {
        if(this.task && this.task.time == '8:00 am') {
            return { color: '#003300', 'font-weight': 'bold'}
        }
    }

    
}