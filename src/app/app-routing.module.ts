import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BmsComponent } from './bms/bms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { 'path': '', component: HomepageComponent},
  { 'path': 'registration', component: RegistrationComponent },
  { 'path': 'homepage', component: HomepageComponent },
  { 'path': 'dashboard', component: DashboardComponent },
  { 'path': 'bms', component: BmsComponent },
  { 'path': 'bms/:id', component: EditBookComponent },
  { 'path': '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
