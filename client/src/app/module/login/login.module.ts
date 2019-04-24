import{NgModule} from'@angular/core';
import{CommonModule} from'@angular/common';
import{RouterModule} from'@angular/router';
import{FormsModule} from'@angular/forms';
import{AuthService, PatientServices} from '../../services/_index';
import{OnlyLoggedInUsersGuard} from './logingaurd'
import {LoginComponent} from './login.component';


@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:
    [    
        CommonModule,
        FormsModule,
        RouterModule.forChild([
          
            {
                path:'login',
                component:LoginComponent
            },
             
             
            
        ])
    ],
    providers:[AuthService]
})
export class LoginModule{

}