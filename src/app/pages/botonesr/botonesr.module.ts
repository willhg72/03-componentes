import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonesrPageRoutingModule } from './botonesr-routing.module';

import { BotonesrPage } from './botonesr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonesrPageRoutingModule
  ],
  declarations: [BotonesrPage]
})
export class BotonesrPageModule {}
