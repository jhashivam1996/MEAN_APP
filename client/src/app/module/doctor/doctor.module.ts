import{NgModule} from'@angular/core';
import{CommonModule} from'@angular/common';
import{RouterModule} from'@angular/router';
import{FormsModule} from'@angular/forms';
import{HttpClientModule} from '@angular/common/http'

import{DoctorProfileComponent} from './doctorprofile/profile.doctor.component'
import{DoctorComponent} from'./doctor.component';
import{DoctorRegComponent} from'./doctor_reg/reg.doctor.component';
 
import{DocterDisplayComponent} from'./display/display.doctor.component';
import{DoctorUpdateComponent} from'./update/update.doctor.component';
import{DoctorServices} from '../../services/_index';
import { OnlyLoggedInUsersGuard } from '../login/logingaurd';
import { SharequeryComponent } from './sharequery/sharequery.component';
import { RecievedqueryComponent } from './recievedquery/recievedquery.component';
import { ResponseComponent } from './response/response.component';
import {MyDatePickerModule} from 'mydatepicker';


@NgModule({
    declarations:[
        DocterDisplayComponent,DoctorRegComponent,
       DoctorUpdateComponent,
        DoctorComponent, DoctorProfileComponent, SharequeryComponent, RecievedqueryComponent, ResponseComponent
    ],
    imports:
    [   MyDatePickerModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot([
            
            { path:'doctor',
             canActivate:[OnlyLoggedInUsersGuard],
             component:DoctorComponent,
                children:[
                    { path:'display', component:DocterDisplayComponent },
                  
                    {path:'profile', component: DoctorProfileComponent},
                    { path:'recievedquery', component:RecievedqueryComponent },  
                    { path:'sharequery', component:  SharequeryComponent },  
                    { path:'response', component:  ResponseComponent },  
                    { path:'update', component:DoctorUpdateComponent },  
                    
                ]},
               
                    { path:'doctor/register',component:DoctorRegComponent },
                   

            
           
        ]),
       
    ],
    providers:[DoctorServices]
})
export class DoctorModule{

}
