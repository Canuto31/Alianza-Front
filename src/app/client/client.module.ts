import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientSaveComponent } from './component/client-save/client-save.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientSaveComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ClientListComponent
  ]
})
export class ClientModule { }
