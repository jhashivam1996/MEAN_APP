import{NgModule} from'@angular/core';
import{CommonModule} from'@angular/common';
import{RouterModule} from'@angular/router';
import{FormsModule} from'@angular/forms';
import{AuthService, PatientServices, DoctorServices} from '../../services/_index';
import{AdminComponent} from './admin.component';
import{DeletePatientComponent} from '../admin/deletepatient/deletepatient.component';
import{DeleteDoctorComponent} from '../admin/deletedoctor/deletedoctor.component';
import {OnlyLoggedInUsersGuard} from '../login/logingaurd'
import { SweetAlertService } from 'angular-sweetalert-service';

@NgModule({
    declarations:[
        AdminComponent,DeletePatientComponent,DeleteDoctorComponent
    ],
    imports:
    [    
        CommonModule,
        FormsModule,
        RouterModule.forChild([
          
            {
                path:'admin',
                canActivate:[OnlyLoggedInUsersGuard],
                component: AdminComponent,
                children:[
                 { path:"deletepatient" ,component:DeletePatientComponent},
                 { path:"deletedoctor" ,component:DeleteDoctorComponent},
                ]
            },
             
             
            
        ])
    ],
    providers:[AuthService,PatientServices,DoctorServices,SweetAlertService]
})
export class AdminModule{

}