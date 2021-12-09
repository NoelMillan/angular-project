import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CentersComponent } from './components/centers/centers.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'users', component: UsersComponent},
  { path:'centers', component: CentersComponent},
  { path:'indicators', component: IndicatorsComponent},
  { path:'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
