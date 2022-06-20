import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CentersComponent } from './components/centers/centers.component';
import { MarketsComponent } from './components/markets/markets.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'users', component: UsersComponent},
  { path:'centers', component: CentersComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'markets', component: MarketsComponent},
  { path: '',   redirectTo: '/about-us', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
