import { UserListComponent } from './user-list/user-list.component';
import { UserIdComponent } from './user-id/user-id.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'user-id', component: UserIdComponent },
  {path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
