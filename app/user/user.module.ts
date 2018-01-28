import { NgModule } from '@angular/core'
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import {userRoutes} from './user.routes'
import { AuthService} from './shared/auth.service'
import {LoginComponent} from './login.component'
import { ProfileComponent } from './profile.component'

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(userRoutes),
        FormsModule
        ],
    providers:[AuthService],
    declarations:[
        LoginComponent, 
        ProfileComponent
        ]
})

export class UserModule {

}

