import {TaskListComponent} from './task-list.component'
import { Routes } from '@angular/router'

import {TaskDetailComponent} from './task-details/task-detail.component'
import {CreateTaskComponent} from './create-task.component'
import {Error404Component} from './errors/error404.component'
import {EventRouteActivator} from './task-details/evet-activate.service'

import {EventListResolver} from './task-list-resolver.service'

export const  appRoutes:Routes =[
    { path: 'events/new', component: CreateTaskComponent,
    canDeactivate: ['']},
    { path: 'events', component: TaskListComponent, resolve: {tasks : EventListResolver } },
    {path:'404', component: Error404Component},
    { path: 'events/events/:id', component: TaskDetailComponent,
    canActivate: [EventRouteActivator] },
    { path: '', redirectTo: 'events', pathMatch:'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }

]