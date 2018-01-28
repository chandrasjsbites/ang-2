import {Component } from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'create-new',
    template: `
    <h2>New Task</h2>
    <hr>
    <div class="col-md-6">
        <h3>[Create Task form will go here]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})

export class CreateTaskComponent {
    isDirty: boolean = true
    constructor(private router: Router) {

    }
    cancel(){
        this.router.navigate(['/events'])
    }

}