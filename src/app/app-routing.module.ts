import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListApplicationComponent } from './list-application/list-application.component';
import { DetailApplicationComponent } from './detail-application/detail-application.component';


const routes: Routes = [
  { path: 'applications', component: ListApplicationComponent },
  // { path: 'add', component: CreateEmployeeComponent },
  // { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'detail/:id', component: ListApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
