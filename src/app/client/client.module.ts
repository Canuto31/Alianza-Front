import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientSaveComponent } from './component/client-save/client-save.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientSaveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
