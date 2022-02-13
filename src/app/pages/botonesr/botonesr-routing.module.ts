import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonesrPage } from './botonesr.page';

const routes: Routes = [
  {
    path: '',
    component: BotonesrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonesrPageRoutingModule {}
