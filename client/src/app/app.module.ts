import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { AppComponent } from './app.component';
import {HomeComponent} from './module/home.component';
import {RouterModule} from '@angular/router';
import {HttpClient, AuthService, PatientServices} from './services/_index';
import {DoctorModule } from './module/doctor/doctor.module';
import {PatientModule} from './module/patient/patient.module';
import {LoginModule} from './module/login/login.module';
import {AdminModule} from './module/admin/admin.module';
import {MyDatePickerModule} from 'mydatepicker';
import { WorkshopsComponent } from './module/workshops/workshops.component';
import { MedicalExibitionComponent } from './module/medical-exibition/medical-exibition.component';
import { SeminarsComponent } from './module/seminars/seminars.component';

@NgModule({
  declarations: [
    AppComponent , HomeComponent, WorkshopsComponent, MedicalExibitionComponent, SeminarsComponent 
  ],
  imports: [
    MyDatePickerModule,
   BrowserModule,
     LoginModule,
     AdminModule,
    HttpModule,
    DoctorModule , 
    PatientModule, 
    Ng2CarouselamosModule, 
   RouterModule.forRoot([
    {
      path:'',
      component: AppComponent,
      children:[
        {path:'',component: HomeComponent },

        {path:'workshop',component: WorkshopsComponent }

      ]
  },
   

   ])
  ],
  providers: [HttpClient,AuthService,PatientServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
