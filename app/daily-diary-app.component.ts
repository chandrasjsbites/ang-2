import {Component } from '@angular/core';

@Component({
    selector: 'daily-diary',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>`
    
})

export class DailyDiaryAppComponent {
    constructor() {
        console.log('DailyDiaryAppComponent constructor');
    }
}