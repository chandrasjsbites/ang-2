import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {
    TaskListComponent,
    TaskThumbnailComponent,
    TaskDetailComponent,
    EventService,
    CreateTaskComponent,
    Error404Component,
    EventRouteActivator,
    EventListResolver
} from './tasks/index'


import {NavbarComponent} from './nav/navbar.component'
import {DailyDiaryAppComponent} from './daily-diary-app.component'
import { appRoutes } from './tasks/routes'
import {AuthService} from './user/shared/auth.service'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })],
    declarations: [
        DailyDiaryAppComponent, 
        TaskListComponent, 
        TaskThumbnailComponent, 
        NavbarComponent, 
        TaskDetailComponent, 
        CreateTaskComponent,
        Error404Component
        ],
    providers: [
        EventService,
        EventRouteActivator,
        { provide : 'canDeactivateCreateEvent', useValue: checkDirtyValue},
        EventListResolver,
        AuthService
        ],
    bootstrap : [DailyDiaryAppComponent]
})

export class AppModule {


}

function checkDirtyValue(component: CreateTaskComponent) {
   
    return false
}