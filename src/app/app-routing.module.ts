import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/component/client-list/client-list.component';
import { HomeComponent } from './home/component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clients', component: ClientListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
