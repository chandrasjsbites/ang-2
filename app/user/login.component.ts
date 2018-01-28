import {Component} from '@angular/core'
import  {Router} from '@angular/router'

import {AuthService} from './shared/auth.service'


@Component({
    selector: 'login',
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent {
    constructor(private auth:AuthService, private route:Router){

    }

    loginUser(loginData){
        this.auth.loginUser(loginData.userName, loginData.password)
        this.route.navigate(['events'])
    }

}