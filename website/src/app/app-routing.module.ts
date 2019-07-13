import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpressumComponent} from './impressum/impressum.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//  https://angular.io/guide/router
