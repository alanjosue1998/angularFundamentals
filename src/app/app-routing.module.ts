import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { UserComponent } from './components/dashboard/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'start',pathMatch: 'full'},
  { path: 'start', component: StartComponent },
  { path: 'dashboard', component: DashboardComponent ,children:[
    { path: '', component: ListUsersComponent },
    { path: 'user', component: UserComponent }
  ]},
  { path: '**',component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
