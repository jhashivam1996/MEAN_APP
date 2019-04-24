import {LoginModule} from '../login/login.module'
import{NgModule} from'@angular/core';
import{CommonModule} from'@angular/common';
import{RouterModule} from'@angular/router';
import{FormsModule} from'@angular/forms';
import {HttpModule } from '@angular/http';
import{OnlyLoggedInUsersGuard} from '../login/logingaurd';
import {PatientProfileComponent} from './patientprofile/profile.patient.component';
import {PatientComponent} from './patient.component';
import {RegistrationComponent} from './registration/registration.component';
import {MyDatePickerModule} from 'mydatepicker';
import {DoctorServices, AuthService} from '../../services/_index';

@NgModule({
    declarations:[
         PatientComponent,RegistrationComponent,PatientProfileComponent
    ],
    imports:
    [    LoginModule,
        CommonModule,
        MyDatePickerModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
          
           
             
            {
            path:'patient',
            canActivate:[OnlyLoggedInUsersGuard],
            component:PatientComponent,
              children:[
               {path:'profile',component:PatientProfileComponent}
              ]
            },
               
           
              { path:'patient/registration',
               component:RegistrationComponent },
           
             
           
            
        ])
    ],
    providers:[DoctorServices,OnlyLoggedInUsersGuard],
    
})
export class PatientModule{

}