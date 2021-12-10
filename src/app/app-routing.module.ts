import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CentersComponent } from './components/centers/centers.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'users', component: UsersComponent},
  { path:'centers', component: CentersComponent},
  { path:'about-us', component: AboutUsComponent},
  { path: '',   redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
